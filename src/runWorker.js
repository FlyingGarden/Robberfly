import * as Path from '../modules/path.js';
export { runWorker as default, };

/**
 * @param data <any>
 * 
 * @return ~<any>
 */
async function runWorker( action, data, )
{
	return new Promise( resolve=> {
		const path= Path.resolve( Path.dirname( Path.traceBack( 0, ) ), './worker.js' );
		const worker= new Worker( path, { name:'foo', type:'module', deno:'Deno' in globalThis, }, );
		
		worker.onmessage= ( { data, }, )=> {
			
			resolve( data, );
			
			if( worker.terminate && !globalThis.Deno )
				worker.terminate();
		};
		
		worker.postMessage( { ...data, action, }, );
	}, );
}
