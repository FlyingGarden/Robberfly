import './init.js';
import { collectTests, } from './test-container.js';
import { executeTest, } from './test-executor.js';

globalThis.onmessage= async ( { data:{ paths, serially=false, }, }, )=> {
	const tests= await loadTests( paths, );
	
	const results= (
		serially? (async tests=> {
			const results= [];
			
			for( const { name, test, } of tests )
				results.push( await executeTest( name, test, ), );
			
			return results;
		})( tests, ):
		await Promise.all(
			tests.map( ( { name, test, }, )=> executeTest( name, test, ), ),
		)
	);
	
	globalThis.postMessage( results, );
	
	globalThis.close();
};

async function loadTests( paths, )
{
	return collectTests(
		async ()=> Promise.all( paths.map( path=> import (path), ), ),
	);
}
