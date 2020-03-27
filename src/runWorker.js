import * as Path from '../modules/path.js';

/**
 * @param data <any>
 * 
 * @return ~<any>
 */
export default async function runWorker( action, data, )
{
	return new Promise( resolve=> {
		const path= Path.resolve( Path.dirname( Path.traceBack( 0, ) ), './worker.js' );
		const worker= new Worker( path, { name:'foo', type:'module', }, );
		
		worker.onmessage= ( { data, }, )=> {
			
			resolve( data, );
			
			if( worker.terminate && !globalThis.Deno )
				worker.terminate();
		};
		
		worker.postMessage( { ...data, action, }, );
	}, );
}
