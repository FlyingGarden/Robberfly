import { areOneThing, sameAs, isRealFunction, isClass, isAsync, } from './utils.js';
export { Asserter as default, };

class Asserter
{
	#counter= 0;
	
	#failures= [];
	
	#closed= false;
	
	#pushFailure= failure=> this.#failures.push( Object.freeze( failure, ), );
	#beforeAssert= ()=> {
		if( this.#closed )
		{
			const message= 'Test function should await for all assertions.';
			const error= new Error( message, );
			
			error.stack= `${message}\n${makeTrace()}`;
			
			throw error;
		}
		++this.#counter;
	};
	
	/**
	 * @param condition  <any>
	 */
	assertTo= condition=> {
		this.#beforeAssert();
		
		if(!( condition ))
			this.#pushFailure( { type:'to', condition, trace:makeTrace(), }, );
	};
	
	/**
	 * @param condition  <any>
	 */
	assertNotTo= condition=> {
		this.#beforeAssert();
		
		if( condition )
			this.#pushFailure( { type:'not_to', condition, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertBe= ( value, expect, )=> {
		this.#beforeAssert();
		
		if(!( areOneThing( value, expect, ) ))
			this.#pushFailure( { type:'be', value, expect, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertNotBe= ( value, expect, )=> {
		this.#beforeAssert();
		
		if( areOneThing( value, expect, ) )
			this.#pushFailure( { type:'not_be', value, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertAs= ( value, expect, )=> {
		this.#beforeAssert();
		
		if(!( sameAs( value, expect, ) ))
			this.#pushFailure( { type:'as', value, expect, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertNotAs= ( value, expect, )=> {
		this.#beforeAssert();
		
		if( sameAs( value, expect, ) )
			this.#pushFailure( { type:'not_as', value, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  (string)
	 *               <any>
	 * @param regexp {RegExp}
	 */
	assertMatch= ( value, regexp, )=> {
		this.#beforeAssert();
		
		if(!( regexp instanceof RegExp ))
			throw new Error( `second parameter of assertMatch should be a RegExp`, );
		
		if(!( regexp.test( value, ) ))
			this.#pushFailure( { type:'match', value:String (value), regexp, trace:makeTrace(), }, );
	}
	
	/**
	 * @param value       <any>
	 * @param expectClass {Class}
	 */
	assertInstanceOf= ( value, expectClass, )=> {
		this.#beforeAssert();
		
		if(!( value instanceof expectClass ))
			this.#pushFailure( { type:'instance_of', value, expectClass:expectClass.name, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value       <any>
	 * @param expectClass {Class}
	 */
	assertNotInstanceOf= ( value, expectClass, )=> {
		this.#beforeAssert();
		
		if( value instanceof expectClass )
			this.#pushFailure( { type:'not_instance_of', value, expectClass:expectClass.name, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value          <any>
	 * @param expectProperty (string)
	 */
	assertOwn= ( value, expectProperty, )=> {
		this.#beforeAssert();
		
		if(!( Object.prototype.hasOwnProperty.call( value, expectProperty, ) ))
			this.#pushFailure( { type:'own', value, expectProperty, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value          <any>
	 * @param expectProperty (string)
	 */
	assertNotOwn= ( value, expectProperty, )=> {
		this.#beforeAssert();
		
		if( Object.prototype.hasOwnProperty.call( value, expectProperty, ) )
			this.#pushFailure( { type:'not_own', value, expectProperty, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value <any>
	 */
	assertFunction= value=> {
		this.#beforeAssert();
		
		if(!( isRealFunction( value, ) ))
			this.#pushFailure( { type:'function', value, trace:makeTrace(), }, );
	}
	
	/**
	 * @param value <any>
	 */
	assertClass= value=> {
		this.#beforeAssert();
		
		if(!( isClass( value, ) ))
			this.#pushFailure( { type:'class', value, trace:makeTrace(), }, );
	}
	
	/**
	 * @param value <any>
	 */
	assertAsync= value=> {
		this.#beforeAssert();
		
		if(!( isAsync( value, ) ))
			this.#pushFailure( { type:'async', value, trace:makeTrace(), }, );
	}
	
	/**
	 * @param expectErrorClass <any>
	 * @param callback         {Function}
	 */
	assertThrow= ( expectError, callback, )=> {
		if(!( isRealFunction( callback, ) ))
			throw new TypeError( 'callback for assertThrow() must be a function and not be a class.', );
		
		this.#beforeAssert();
		
		return tries( callback, )
			.then( ()=> {
				this.#pushFailure( { type:'throw', error:null, expectError, trace:makeTrace(), }, );
			}, )
			.catch( error=> {
				if(!( areOneThing( error, expectError, ) ))
					this.#pushFailure( { type:'throw', error, expectError, trace:makeTrace(), }, );
			}, )
		;
	};
	
	/**
	 * @param expectErrorClass {Class}
	 * @param callback         {Function}
	 */
	assertThrowInstanceOf= ( expectErrorClass, callback, )=> {
		if(!( isRealFunction( callback, ) ))
			throw new TypeError( 'callback for assertThrowInstanceOf() must be a function and not be a class.', );
		
		this.#beforeAssert();
		
		return tries( callback, )
			.then( ()=> {
				this.#pushFailure( { type:'throw_instance_of', error:null, expectErrorClass, trace:makeTrace(), }, );
			}, )
			.catch( error=> {
				if(!( error instanceof expectErrorClass ))
					this.#pushFailure( { type:'throw_instance_of', error, expectErrorClass, trace:makeTrace(), }, );
			}, )
		;
	};
	
	/**
	 * @param callback {Function}
	 */
	assertToThrow= callback=> {
		if(!( isRealFunction( callback, ) ))
			throw new TypeError( 'callback for assertToThrow() must be a function and not be a class.', );
		
		this.#beforeAssert();
		
		return tries( callback, )
			.then( ()=> {
				this.#pushFailure( { type:'to_throw_something', trace:makeTrace(), }, );
			}, )
		;
	};
	
	/**
	 * @param callback {Function}
	 */
	assertNotThrow= callback=> {
		if(!( isRealFunction( callback, ) ))
			throw new TypeError( 'callback for assertNotThrow() must be a function and not be a class.', );
		
		this.#beforeAssert();
		
		return tries( callback, )
			.catch( error=> {
				this.#pushFailure( { type:'not_throw', error, trace:makeTrace(), }, );
			}, )
		;
	};
	
	/**
	 * @usage
	 *  const runner= assertRun();
	 *  
	 *  handleCallback( ()=> {
	 *  	runner.run();
	 *  }, );
	 *  
	 *  runner.assert();
	 * 
	 * @return { run:{Function}, assert:{Function}, }
	 */
	assertRun= ()=> {
		let times= 0;
		
		return {
			run: ( index=NaN, )=> {
				if( !Number.isNaN( index, ) && index !== times )
					this.#pushFailure( { type:'run_order', index, expectIndex:times, trace:makeTrace(), }, );
				
				++times;
			},
			assert: ( expectTimes=NaN, )=> {
				this.#beforeAssert();
				
				if( Number.isNaN( expectTimes, ) )
				{
					if(!( times ))
						this.#pushFailure( { type:'run', trace:makeTrace(), }, );
				}
				else
				{
					if( expectTimes !== times )
						this.#pushFailure( { type:'run_times', times, expectTimes, trace:makeTrace(), }, );
				}
			},
		};
	}
	
	static getResult( asserter, )
	{
		asserter.#closed= true;
		
		return {
			assertions: asserter.#counter,
			failures: [ ...asserter.#failures, ],
		};
	}
}

function makeTrace()
{
	const path= import.meta.url.replace( /src\/Asserter\.js(?:\?.*)?(?:#.*)?$/, '', );
	
	return new Error()
		.stack
		.split( '\n', )
		.slice( 1, )
		.filter( $=> !$.includes( path, ), )
		.join( '\n', )
	;
}

function tries( callback, )
{
	let result= undefined;
	let reason= undefined;
	let successful= false;
	
	try{
		result= callback();
		
		if( result instanceof Promise )
			return result;
		
		successful= true;
	}
	catch( error )
	{
		reason= error;
	}
	
	return {
		then( callback=undefined, catchCallback=undefined, ){
			if( successful )
				callback && callback( result, );
			else
				catchCallback && catchCallback( reason, );
			
			return this;
		},
		catch( callback=undefined, ){
			return this.then( undefined, callback, );
		},
	};
}
