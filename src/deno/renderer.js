import * as Color from '../../modules/deno/colors.ts';
import { isPureObject, sameAs, } from '../utils.js';

const typeRenderers= {
	to: ( { condition, }, )=> [
		Color.red( renderValue( condition, ), ), '\nshould be true.',
	],
	not_to: ( { condition, }, )=> [
		Color.red( renderValue( condition, ), ), '\nshould be false.',
	],
	be:( { value, expect, }, )=> (
		sameAs( value, expect, )? [
			'two of:\n',Color.red( renderValue( value, ), ), '\nshould not be different referrence',
		]:
		[
			Color.red( renderValue( value, ), ), '\nshould be:\n', Color.green( renderValue( expect, ), ),
		]
	),
	not_be: ( { value, expect, }, )=> [
		Color.green( renderValue( value, ), ), '\nshould not be this value',
	],
	as: ( { value, expect, }, )=> [
		Color.red( renderValue( value, ), ), '\nshould be the same as:\n', Color.green( renderValue( expect, ), ),
	],
	not_as: ( { value, expect, }, )=> [
		Color.green( renderValue( value, ), ), '\nshould not be the same as this value',
	],
	instance_of: ( { value, expectClass, }, )=> [
		Color.red( renderValue( value, ), ), '\nshould be instance of ', Color.green( renderValue( expectClass, ), ),
	],
	function: ( { value, }, )=> [
		Color.red( renderValue( value, ), ), '\nshould be a function',
	],
	class: ( { value, }, )=> [
		Color.red( renderValue( value, ), ), '\nshould be a class',
	],
	async: ( { value, }, )=> [
		Color.red( renderValue( value, ), ), '\nshould be an async function or class',
	],
	throw: ( { value, expectError, error, }, )=> [
		'expect to throw:\n', Color.green( renderValue( expectError, ), ),
		'\nactually throw:\n', error? Color.red( renderValue( error, ), ): 'nothing',
	],
	throw_instance_of: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', Color.green( renderValue( expectErrorClass, ), ),
		'\nactually throw:\n', error? Color.red( renderValue( error, ), ): 'nothing',
	],
	to_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', Color.green( renderValue( expectErrorClass, ), ),
		'\nactually throw:\n', error? Color.red( renderValue( error, ), ): 'nothing',
	],
	not_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to not throw error.\nactually throw:\n', Color.red( renderValue( error, ), ),
	],
	run: ()=> [
		'function should run',
	],
	not_run: ()=> [
		'function should not run',
	],
	run_times: ( { times, expectTimes, }, )=> [
		'function should run ', Color.green( String (expectTimes), ), ' times, but run ', Color.red( String (times), ), ' times actually',
	],
};

export async function renderResult( result, )
{
	return ($=> $.flat( Infinity, ).join( '', ))( [
		
		// title
		'testing ', Color.yellow( result.name, ), '\n',
		
		// for each failure
		result.failures.map( failure=> [
			'\n', typeRenderers[failure.type]( failure ), '\n', failure.trace, '\n',
		], ),
		
		// error
		result.error? [
			'\n', Color.bgRed( 'throws:', ), '\n',
			renderValue( result.error, ), '\n',
		]: [],
		
		// aggregation
		'\n',
		Color.yellow( String (result.assertions), ), ' assertions, ',
		result.failures.length? Color.red( String (result.failures.length), ): Color.green( String (result.failures.length), ), ' failures',
		result.error? [ ' and ', Color.bgRed( '1 error!', ), ]: [],
		'\n',
	], );
}

export async function renderResults( results, )
{
	return ($=> $.flat( Infinity, ).join( '', ))( [
		
		'testing ', Color.yellow( String (results.length), ), ' tests\n',
		
		// for each result
		results.map( result=> [
			(
				result.error? [ '\n', Color.bgRed( result.name, ), '\n', ]:
				result.failures.length? [ '\n', Color.red( result.name, ), '\n', ]:
				[]
			),
			
			// for each failure
			result.failures.map( failure=> [
				'\n', typeRenderers[failure.type]( failure ), '\n', failure.trace, '\n',
			], ),
			
			// error
			result.error? [
				'\n', Color.bgRed( 'throws:', ), '\n',
				renderValue( result.error, ), '\n',
			]: [],
		], ),
		
		// aggregation
		'\n',
		'tested ', results.length, ' tests: ',
		results.reduce( ( sum, result, )=> sum - - result.assertions, 0, ), ' assertions, ',
		(failures=> failures? Color.red( String (failures), ): Color.green( String (failures), ))(
			results.reduce( ( sum, result, )=> sum - - result.failures.length, 0, ),
		),
		' failures ',
		(errors=> errors? [ ' and ', Color.bgRed( `${errors} error!`, ), ]: [])(
			results.reduce( ( sum, result, )=> sum - - (result.error? 1: 0), 0, ),
		),
		'\n',
	], );
}

function renderValue( value, )
{
	return (
		value === null? 'null':
		value === undefined? 'undefined':
		typeof value === 'number'? `Number( ${value} )`:
		typeof value === 'bigint'? `BigInt( ${value} )`:
		typeof value === 'string'? `String( ${value} )`:
		typeof value === 'symbol'? value.toString():
		value instanceof Error? value.stack:
		Array.isArray( value, )? `[\n${value.map( item=> `${renderValue( item, ).replace( /(?<=^|\n)/g, '\t', )},\n`, )}]`:
		isPureObject( value, )? JSON.stringify( value, ):
		typeof value === 'function'? (
			!value.name? value.toString():
			(value.name[0].toUpperCase() === value.name[0])? value.name:
			`${value.name}()`
		):
		String (value)
	);
}
