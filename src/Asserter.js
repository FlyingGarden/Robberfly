import { areOneThing, sameAs, } from './utils.js';

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
