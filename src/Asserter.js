import { areOneThing, sameAs, isRealFunction, isClass, isAsync, } from './utils.js';

export default class Asserter
{
	#counter= 0;
	
	#failures= [];
	
	#pushFailure= failure=> this.#failures.push( Object.freeze( failure, ), );
	
	/**
	 * @param condition  <any>
	 */
	assertTo= condition=> {
		++this.#counter;
		
		if(!( condition ))
			this.#pushFailure( { type:'to', condition, trace:makeTrace(), }, );
	};
	
	/**
	 * @param condition  <any>
	 */
	assertNotTo= condition=> {
		++this.#counter;
		
		if( condition )
			this.#pushFailure( { type:'not_to', condition, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertBe= ( value, expect, )=> {
		++this.#counter;
		
		if(!( areOneThing( value, expect, ) ))
			this.#pushFailure( { type:'be', value, expect, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertNotBe= ( value, expect, )=> {
		++this.#counter;
		
		if( areOneThing( value, expect, ) )
			this.#pushFailure( { type:'not_be', value, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertAs= ( value, expect, )=> {
		++this.#counter;
		
		if(!( sameAs( value, expect, ) ))
			this.#pushFailure( { type:'as', value, expect, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value  <any>
	 * @param expect <any>
	 */
	assertNotAs= ( value, expect, )=> {
		++this.#counter;
		
		if( sameAs( value, expect, ) )
			this.#pushFailure( { type:'not_as', value, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value       <any>
	 * @param expectClass {Class}
	 */
	assertInstanceOf= ( value, expectClass, )=> {
		++this.#counter;
		
		if(!( value instanceof expectClass ))
			this.#pushFailure( { type:'instance_of', value, expectClass, trace:makeTrace(), }, );
	};
	
	/**
	 * @param value <any>
	 */
	assertFunction= value=> {
		++this.#counter;
		
		if(!( isRealFunction( value, ) ))
			this.#pushFailure( { type:'function', value, trace:makeTrace(), }, );
	}
	
	/**
	 * @param value <any>
	 */
	assertClass= value=> {
		++this.#counter;
		
		if(!( isClass( value, ) ))
			this.#pushFailure( { type:'class', value, trace:makeTrace(), }, );
	}
	
	/**
	 * @param value <any>
	 */
	assertAsync= value=> {
		++this.#counter;
		
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
		
		++this.#counter;
		
		try
		{
			callback();
			
			this.#pushFailure( { type:'throw', error:null, expectError, trace:makeTrace(), }, );
		}
		catch( error )
		{
			if(!( areOneThing( error, expectError, ) ))
				this.#pushFailure( { type:'throw', error, expectError, trace:makeTrace(), }, );
		}
	};
	
	/**
	 * @param expectErrorClass {Class}
	 * @param callback         {Function}
	 */
	assertThrowInstanceOf= ( expectErrorClass, callback, )=> {
		if(!( isRealFunction( callback, ) ))
			throw new TypeError( 'callback for assertThrowInstanceOf() must be a function and not be a class.', );
		
		++this.#counter;
		
		try
		{
			callback();
			
			this.#pushFailure( { type:'throw_instance_of', error:null, expectErrorClass, trace:makeTrace(), }, );
		}
		catch( error )
		{
			if(!( error instanceof expectErrorClass ))
				this.#pushFailure( { type:'throw_instance_of', error, expectErrorClass, trace:makeTrace(), }, );
		}
	};
	
	static getResult( asserter, )
	{
		return {
			assertions: asserter.#counter,
			failures: [ ...asserter.#failures, ],
		};
	}
}

function makeTrace()
{
	const path= import.meta.url.replace( /src\/Asserter\.js$/, '', );
	
	return new Error()
		.stack
		.split( '\n', )
		.slice( 1, )
		.filter( $=> !$.includes( path, ), )
		.join( '\n', )
	;
}
