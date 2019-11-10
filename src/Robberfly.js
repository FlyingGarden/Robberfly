import * as Path from '../modules/path.js';
import { collectTests, } from './test-container.js';
import { executeTest, } from './test-executor.js';
import { printResults, } from './result-printer.js';

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
	 * @return ~<>
	 */
	async run()
	{
		const tests= await loadTests( this.#paths, );
		
		const results= await Promise.all(
			tests.map( ( { name, test, }, )=> executeTest( name, test, ), ),
		);
		
		return printResults( results, );
	}
	
	/**
	 * @return ~<>
	 */
	async runSerially()
	{
		const tests= await loadTests( this.#paths, );
		
		const results= [];
		
		for( const { name, test, } of tests )
			results.push( await executeTest( name, test, ), );
		
		return printResults( results, );
	}
	
	/**
	 * @return ~<>
	 */
	async runIso()
	{
		const results= await runWorker( { paths: this.#paths, }, );
		
		return printResults( results, );
	}
	
	/**
	 * @return ~<>
	 */
	async runIsoEach()
	{
		const results= await Promise.all( this.#paths.map( path=> runWorker( { paths: [ path, ], }, ), ) );
		
		return printResults( results.flat( 1, ), );
	}
	
	/**
	 * @return ~<>
	 */
	async runIsoSerially()
	{
		const results= await runWorker( { paths: this.#paths, serially:true, }, );
		
		return printResults( results, );
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
