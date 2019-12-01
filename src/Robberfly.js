import * as Path from '../modules/path.js';
import { collectTests, } from './test-container.js';
import { executeTest, } from './test-executor.js';
import RobberflyResults from './RobberflyResults.js';

export default class Robberfly
{
	/**
	 * paths of test cases
	 * 
	 * @type [](string)
	 */
	#paths= [];
	
	/**
	 * @param path (string)
	 * 
	 * @return <>
	 */
	addPath( ...paths )
	{
		this.#paths.push( ...paths.map( path=> resolvePath( path, ) ), );
	}
	
	/**
	 * @return ~{RobberflyResults}
	 */
	async run()
	{
		const tests= await loadTests( this.#paths, );
		
		const results= await Promise.all(
			tests.map( ( { name, test, }, )=> executeTest( name, test, ), ),
		);
		
		return new RobberflyResults( results, );
	}
	
	/**
	 * @return ~{RobberflyResults}
	 */
	async runSerially()
	{
		const tests= await loadTests( this.#paths, );
		
		const results= [];
		
		for( const { name, test, } of tests )
			results.push( await executeTest( name, test, ), );
		
		return new RobberflyResults( results, );
	}
	
	/**
	 * @return ~{RobberflyResults}
	 */
	async runIso()
	{
		const results= await runWorker( { paths: this.#paths, }, );
		
		return new RobberflyResults( results, );
	}
	
	/**
	 * @param limit (number)
	 * 
	 * @return ~{RobberflyResults}
	 */
	async runIsoEach( limit=48, )
	{
		const promises= [];
		
		let concurrent= 0;
		let index= 0
		while( index < this.#paths.length )
		if( concurrent < limit )
		{
			
			++concurrent;
			
			const path= this.#paths[index++];
			
			promises.push( runWorker( { paths: [ path, ], }, ).finally( ()=> --concurrent, ), );
		}
		else
			await new Promise( resolve=> setTimeout( resolve, ), );
		
		const results= await Promise.all( promises, );
		
		return new RobberflyResults( results.flat( 1, ), );
	}
	
	/**
	 * @return ~{RobberflyResults}
	 */
	async runIsoSerially()
	{
		const results= await runWorker( { paths: this.#paths, serially:true, }, );
		
		return new RobberflyResults( results, );
	}
}

/**
 * @param path (string)
 * 
 * @return (string)
 */
function resolvePath( path, )
{
	const basePath= Path.traceBack( 3, ).replace( /\/[^\/]*$/, '', );
	
	return Path.resolve( basePath, path, );
}

/**
 * @param paths (string)
 * 
 * @return ~[]{ name:(string), test:{Function}, }
 */
async function loadTests( paths, )
{
	return collectTests(
		async ()=> Promise.all( paths.map( path=> import (path), ), ),
	);
}

/**
 * @param data <any>
 * 
 * @return ~<any>
 */
async function runWorker( data, )
{
	return new Promise( resolve=> {
		const path= Path.resolve( Path.dirname( Path.traceBack( 0, ) ), './worker.js' );
		const worker= new Worker( path, { name:'foo', type:'module', }, );
		
		worker.onmessage= ( { data, }, )=> {
			
			resolve( data, );
			
			if( worker.terminate )
				worker.terminate();
		};
		
		worker.postMessage( data, );
	}, );
}
