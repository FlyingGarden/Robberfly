import './init.js';
import { collectTests, } from './test-container.js';
import { executeTest, } from './test-executor.js';
import runWorker from './runWorker.js';

const actions= {
	run: async ( { paths, }, )=> Promise.all(
		(await loadTests( paths, )).map( ( { name, test, }, )=> executeTest( name, test, ), ),
	),
	runSerially: async ( { paths, }, )=> {
		const tests= await loadTests( paths, );
		
		const results= [];
		
		for( const { name, test, } of tests )
			results.push( await executeTest( name, test, ), );
		
		return results;
	},
	runEach: async ( { paths, limit=48, }, )=> {
		const tests= await Promise.all( paths.map( async path=> (await loadTests( [ path, ], )).map( ( test, index, )=> ({ test, index, path, }), ), ), ).then( $=> $.flat( 1, ), );
		
		const concManager= new ConcurrentManager( limit, );
		
		const tasks= [];
		
		for( const { test, index, path, } of tests )
		{
			await concManager.ticket();
			
			tasks.push( runWorker( 'runOne', { path, index, }, ).finally( ()=> concManager.free(), ), );
		}
		
		return Promise.all( tasks, ).then( $=> $.flat( 1, ), );
	},
	runOne: async ( { path, index, }, )=> {
		const { name, test, }= (await loadTests( [ path, ], ))[index];
		
		return [ await executeTest( name, test, ), ];
	},
};

globalThis.onmessage= async ( { data:{ action, ...data }, }, )=> {
	
	const results= await actions[action]( data, );
	
	if( globalThis.Deno )
		results.forEach( result=> {
			if( result.error && result.error instanceof Error )
				result.error= result.error.stack;
			
			result.failures.forEach( failure=> {
				if( failure.error && failure.error instanceof Error )
					failure.error= failure.error.stack;
			}, );
		}, );
	
	// globalThis.postMessage( { foo:'bar', }, );
	globalThis.postMessage( results, );
	
	if( globalThis.Deno && globalThis.workerClose )
		return globalThis.workerClose();
	
	globalThis.close();
};

async function loadTests( paths, )
{
	return collectTests(
		async ()=> Promise.all( paths.map( path=> import (path), ), ),
	);
}

class ConcurrentManager
{
	#limit= 0;
	#concurrent= 0;
	#queue= [];
	
	constructor( limit=1, )
	{
		this.#limit= limit;
	}
	
	async ticket()
	{
		if( this.#concurrent < this.#limit )
			return void ++this.#concurrent;
		
		const ticket= makePromise();
		
		this.#queue.push( ticket, );
		
		return ticket;
	}
	
	free()
	{
		--this.#concurrent;
		
		const ticket= this.#queue.shift();
		
		if( ticket )
			ticket.resolve();
	}
}

function makePromise(){
	let resolve, reject;
	
	const promise= new Promise( ( toResolve, toReject, )=> {
		resolve= toResolve;
		reject= toReject;
	}, );
	
	return Object.create( Promise.prototype, {
		promise: { value:promise },
		resolve: { value:resolve, },
		reject: { value:reject, },
		then: { value:( ...args )=> promise.then( ...args, ), },
		catch: { value:( ...args )=> promise.catch( ...args, ), },
		finally: { value:( ...args )=> promise.finally( ...args, ), },
	}, );
};
