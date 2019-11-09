
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
