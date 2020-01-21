import './init.js';
import { collectTests, } from './test-container.js';
import { executeTest, } from './test-executor.js';

globalThis.onmessage= async ( { data:{ paths, serially=false, }, }, )=> {
	const tests= await loadTests( paths, );
	
	const results= await (
		serially? (async tests=> {
			const results= [];
			
			for( const { name, test, } of tests )
				results.push( await executeTest( name, test, ), );
			
			return results;
		})( tests, ):
		Promise.all(
			tests.map( ( { name, test, }, )=> executeTest( name, test, ), ),
		)
	);
	
	if( globalThis.Deno )
		results.forEach( result=> {
			if( result.error )
				result.error= result.error.stack;
		}, );
	
	globalThis.postMessage( results, );
	
	if( globalThis.Deno )
		return globalThis.workerClose();
	
	globalThis.close();
};

async function loadTests( paths, )
{
	return collectTests(
		async ()=> Promise.all( paths.map( path=> import (path), ), ),
	);
}
