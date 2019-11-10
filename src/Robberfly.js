import * as Path from '../modules/path.js';
import { collectTests, } from './test-container.js';

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
