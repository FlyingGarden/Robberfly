
export default class Asserter
{
	#counter= 0;
	
	#failures= [];
	
	#pushFailure= failure=> this.#failures.push( Object.freeze( failure, ), );
	
	static getResult( asserter, )
	{
		return {
			assertions: asserter.#counter,
			failures: [ ...asserter.#failures, ],
		};
	}
}
