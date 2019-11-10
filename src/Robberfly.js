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
