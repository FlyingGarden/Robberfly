import * as Path from '../modules/path.js';

export default class Robberfly
{
	
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
