import { printResults, } from './result-printer.js';

export default class RobberflyResults
{
	#results;
	
	constructor( results, )
	{
		this.#results= results;
	}
	
	async print()
	{
		return printResults( this.#results, );
	}
}
