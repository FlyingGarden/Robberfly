import Styled from './Styled.js';
import { sameAs, } from '../utils.js';

const typeRenderers= {
	to: ( { condition, }, )=> [
		new Styled( { color:'red', }, condition, ), ' should be true.',
	],
	not_to: ( { condition, }, )=> [
		new Styled( { color:'red', }, condition, ), ' should be false.',
	],
	be:( { value, expect, }, )=> (
		sameAs( value, expect, )? [
			'two of ', new Styled( { color:'red', }, value, ), ' should not be different referrence',
		]:
		[
			new Styled( { color:'red', }, value, ), ' should be ', new Styled( { color:'green', }, expect, ),
		]
	),
	not_be: ( { value, expect, }, )=> [
		new Styled( { color:'green', }, value, ), ' should not be this value',
	],
	as: ( { value, expect, }, )=> [
		new Styled( { color:'red', }, value, ), ' should be the same as ', new Styled( { color:'green', }, expect, ),
	],
	not_as: ( { value, expect, }, )=> [
		new Styled( { color:'green', }, value, ), ' should not be the same as this value',
	],
	instance_of: ( { value, expectClass, }, )=> [
		new Styled( { color:'red', }, value, ), ' should be instance of ', new Styled( { color:'green', }, expectClass, ),
	],
	own: ( { value, expectProperty, }, )=> [
		new Styled( { color:'red', }, value, ), ' should own property ', new Styled( { color:'green', }, expectProperty, ),
	],
	not_own: ( { value, expectProperty, }, )=> [
		new Styled( { color:'red', }, value, ), ' should not own property ', new Styled( { color:'green', }, expectProperty, ),
	],
	function: ( { value, }, )=> [
		new Styled( { color:'red', }, value, ), ' should be a function',
	],
	class: ( { value, }, )=> [
		new Styled( { color:'red', }, value, ), ' should be a class',
	],
	async: ( { value, }, )=> [
		new Styled( { color:'red', }, value, ), ' should be an async function or class',
	],
	throw: ( { value, expectError, error, }, )=> [
		'expect to throw:\n', new Styled( { color:'green', }, expectError, ),
		'\nactually throw', ...(error? [ ':\n', new Styled( { color:'red', }, error, ), ]: ' nothing'),
	],
	throw_instance_of: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', new Styled( { color:'green', }, expectErrorClass, ),
		'\nactually throw', ...(error? [ ':\n', new Styled( { color:'red', }, error, ), ]: ' nothing'),
	],
	to_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', new Styled( { color:'green', }, expectErrorClass, ),
		'\nactually throw', ...(error? [ ':\n', new Styled( { color:'red', }, error, ), ]: ' nothing'),
	],
	not_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to not throw error. actually throw:\n', new Styled( { color:'red', }, error, ),
	],
	run: ()=> [
		'function should run',
	],
	run_order: ( { index, expectIndex, }, )=> [
		'function should run at index ', new Styled( { color:'green', }, index, ), ', but at index ', new Styled( { color:'red', }, expectIndex, ), ' actually',
	],
	run_times: ( { times, expectTimes, }, )=> [
		'function should run ', new Styled( { color:'green', }, expectTimes, ), ' times, but run ', new Styled( { color:'red', }, times, ), ' times actually',
	],
};

export function renderResult( result, )
{
	return [ { type:'group', data:[ new Styled( { 'font-weight':'normal', }, 'testing ', ), new Styled( { color:'blue', }, result.name, ), ], children: [
		
		// for each failure
		result.failures.map( failure=> [
			{ type:'log', data:[ ...typeRenderers[failure.type]( failure ), '\n', failure.trace, ], },
		], ),
		
		// error
		result.error? [
			{ type:'error', data:[ new Styled( { 'background-color':'red', color:'white', }, 'throws:', ), '\n', result.error, ], },
		]: [],
		
		// aggregation
		{ type:'log', data:[
			result.assertions, ' assertions, ',
			new Styled( { color:result.failures.length? 'red': 'green', }, result.failures.length, ),
			' failures',
			...(result.error? [ ' and ', new Styled( { 'background-color':'red', color:'white', }, 1, ' error!', ) ]: []),
		], },
	], }, ];
}

export function renderResults( results, )
{
	return [ { type:'group', data:[ new Styled( { 'font-weight':'normal', }, 'testing ', ), new Styled( { color:'blue', }, results.length, ), new Styled( { 'font-weight':'normal', }, ' tests', ), ], children: [
		
		// for each result
		results.map( result=> (
			result.error || result.failures.length?
			{ type:result.error? 'group': 'groupCollapsed', data:[ new Styled( result.error? { 'background-color':'red', color:'white', }: { color:'red', }, result.name, ), ], children:[
				
				// for each failure
				result.failures.map( failure=> [
					{ type:'log', data:[ ...typeRenderers[failure.type]( failure ), '\n', failure.trace, ], },
				], ),
				
				// error
				result.error? [
					{ type:'error', data:[ new Styled( { 'background-color':'red', color:'white', }, 'throws:', ), '\n', result.error, ], },
				]: [],
			], }:
			[]
		), ),
		
		// aggregation
		{ type:'log', data:[
			'tested ', results.length, ' tests: ',
			results.reduce( ( sum, result, )=> sum - - result.assertions, 0, ), ' assertions, ',
			(failures=> new Styled( { color:failures? 'red': 'green', }, failures, ))(
				results.reduce( ( sum, result, )=> sum - - result.failures.length, 0, ),
			),
			' failures ',
			...(errors=> errors? [ ' and ', new Styled( { 'background-color':'red', color:'white', }, errors, ' error!', ), ]: [])(
				results.reduce( ( sum, result, )=> sum - - (result.error? 1: 0), 0, ),
			),
		], },
	], }, ];
}
