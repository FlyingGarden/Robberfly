import { URL, pathToFileURL, } from 'url';
import https from 'https';
import http from 'https';
import { promises as fs, } from 'fs';
import { createHash, } from 'crypto';

const baseURL= pathToFileURL( process.cwd(), ).href;

export async function resolve( specifier, parentModuleURL=baseURL, defaultResolver, )
{
	const url= new URL( specifier, parentModuleURL, );
	
	if( url.protocol.startsWith( 'http', ) )
	{
		const hash= md5( url.href, );
		const path= `/tmp/node-esm/${hash}.js`;
		const result= {
			url: `file://${path}`,
			format: 'module',
		};
		
		if( await file_exists( path, ) )
			return result;
		
		if( !await file_exists( '/tmp/node-esm', ) )
			await fs.mkdir( '/tmp/node-esm', );
		
		const data= await request( url, );
		
		await fs.writeFile( path, data, );
		
		return result;
	}
	return {
		url: new URL( specifier, parentModuleURL, ).href,
		format: 'module',
	};
}

async function request( url, )
{
	const { get, }= url.protocol === 'https'? https: http;
	
	return new Promise( ( resolve, reject, )=> get( url, response=> {
		if( response.statusCode !== 200 )
			reject();
		
		const data= [];
		
		response.on( 'data', $=> data.push( $, ), );
		response.on( 'end', ()=> resolve( data.join( '', ), ), );
	}, ), );
}

async function file_exists( path, )
{
	return fs.stat( path, ).then( ()=> true, ()=> false, );
}

function md5( data, )
{
	return createHash( 'md5', ).update( data, ).digest( 'hex', );
}
