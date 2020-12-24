import { isPureObject, sameAs, } from '../utils.js';

const typeRenderers= {
	to: ( { condition, }, )=> [
		color( 'red', renderValue( condition, ), ), '\nshould be true.',
	],
	not_to: ( { condition, }, )=> [
		color( 'red', renderValue( condition, ), ), '\nshould be false.',
	],
	be:( { value, expect, }, )=> (
		sameAs( value, expect, )? [
			'two of:\n',color( 'red', renderValue( value, ), ), '\nshould not be different referrence',
		]:
		[
			color( 'red', renderValue( value, ), ), '\nshould be:\n', color( 'green', renderValue( expect, ), ),
		]
	),
	not_be: ( { value, expect, }, )=> [
		color( 'green', renderValue( value, ), ), '\nshould not be this value',
	],
	as: ( { value, expect, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould be the same as:\n', color( 'green', renderValue( expect, ), ),
	],
	not_as: ( { value, expect, }, )=> [
		color( 'green', renderValue( value, ), ), '\nshould not be the same as this value',
	],
	match: ( { value, regexp, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould match regexp ', color( 'green', renderValue( regexp, ), ),
	],
	instance_of: ( { value, expectClass, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould be instance of ', color( 'green', typeof expectClass === 'string'? expectClass: renderValue( expectClass, ), ),
	],
	not_instance_of: ( { value, expectClass, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould not be instance of ', color( 'green', typeof expectClass === 'string'? expectClass: renderValue( expectClass, ), ),
	],
	own: ( { value, expectProperty, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould own property ', color( 'green', renderValue( expectProperty, ), ),
	],
	not_own: ( { value, expectProperty, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould not own property ', color( 'green', renderValue( expectProperty, ), ),
	],
	function: ( { value, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould be a function',
	],
	class: ( { value, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould be a class',
	],
	async: ( { value, }, )=> [
		color( 'red', renderValue( value, ), ), '\nshould be an async function or class',
	],
	throw: ( { value, expectError, error, }, )=> [
		'expect to throw:\n', color( 'green', renderValue( expectError, ), ),
		'\nactually throw:\n', error? color( 'red', renderValue( error, ), ): 'nothing',
	],
	throw_instance_of: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', color( 'green', renderValue( expectErrorClass, ), ),
		'\nactually throw:\n', error? color( 'red', renderValue( error, ), ): 'nothing',
	],
	to_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to throw an error instance of:\n', color( 'green', renderValue( expectErrorClass, ), ),
		'\nactually throw:\n', error? color( 'red', renderValue( error, ), ): 'nothing',
	],
	not_throw: ( { value, expectErrorClass, error, }, )=> [
		'expect to not throw error.\nactually throw:\n', color( 'red', renderValue( error, ), ),
	],
	run: ()=> [
		'function should run',
	],
	run_order: ( { index, expectIndex, }, )=> [
		'function should run at index ', color( 'green', String (index), ), ', but at index ', color( 'red', String (expectIndex), ), ' actually',
	],
	run_times: ( { times, expectTimes, }, )=> [
		'function should run ', color( 'green', String (expectTimes), ), ' times, but run ', color( 'red', String (times), ), ' times actually',
	],
};

export async function renderResult( result, )
{
	return ($=> $.flat( Infinity, ).join( '', ))( [
		
		// title
		'testing ', color( 'yellow', result.name, ), '\n',
		
		// for each failure
		result.failures.map( failure=> [
			'\n', typeRenderers[failure.type]( failure ), '\n', failure.trace, '\n',
		], ),
		
		// error
		result.error? [
			'\n', color( 'bgRed', 'throws:', ), '\n',
			renderValue( result.error, ), '\n',
		]: [],
		
		// aggregation
		'\n',
		color( 'yellow', String (result.assertions), ), ' assertions, ',
		result.failures.length? color( 'red', String (result.failures.length), ): color( 'green', String (result.failures.length), ), ' failures',
		result.error? [ ' and ', color( 'bgRed', '1 error!', ), ]: [],
		'\n',
	], );
}

export async function renderResults( results, )
{
	return ($=> $.flat( Infinity, ).join( '', ))( [
		
		'testing ', color( 'yellow', String (results.length), ), ' tests\n',
		
		// for each result
		results.map( result=> [
			(
				result.error? [ '\n', color( 'bgRed', result.name, ), '\n', ]:
				result.failures.length? [ '\n', color( 'red', result.name, ), '\n', ]:
				[]
			),
			
			// for each failure
			result.failures.map( failure=> [
				'\n', typeRenderers[failure.type]( failure ), '\n', failure.trace, '\n',
			], ),
			
			// error
			result.error? [
				'\n', color( 'bgRed', 'throws:', ), '\n',
				renderValue( result.error, ), '\n',
			]: [],
		], ),
		
		// aggregation
		'\n',
		'tested ', results.length, ' tests: ',
		results.reduce( ( sum, result, )=> sum - - result.assertions, 0, ), ' assertions, ',
		(failures=> failures? color( 'red', String (failures), ): color( 'green', String (failures), ))(
			results.reduce( ( sum, result, )=> sum - - result.failures.length, 0, ),
		),
		' failures ',
		(errors=> errors? [ ' and ', color( 'bgRed', `${errors} error!`, ), ]: [])(
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

function color( color, text, )
{
	const colors= {
		reset:         { open:'0',  close:'0',  },
		bold:          { open:'1',  close:'22', },
		dim:           { open:'2',  close:'22', },
		italic:        { open:'3',  close:'23', },
		underline:     { open:'4',  close:'24', },
		inverse:       { open:'7',  close:'27', },
		hidden:        { open:'8',  close:'28', },
		strikethrough: { open:'9',  close:'29', },
		black:         { open:'30', close:'39', },
		red:           { open:'31', close:'39', },
		green:         { open:'32', close:'39', },
		yellow:        { open:'33', close:'39', },
		blue:          { open:'34', close:'39', },
		magenta:       { open:'35', close:'39', },
		cyan:          { open:'36', close:'39', },
		white:         { open:'37', close:'39', },
		gray:          { open:'90', close:'39', },
		bgBlack:       { open:'40', close:'49', },
		bgRed:         { open:'41', close:'49', },
		bgGreen:       { open:'42', close:'49', },
		bgYellow:      { open:'43', close:'49', },
		bgBlue:        { open:'44', close:'49', },
		bgMagenta:     { open:'45', close:'49', },
		bgCyan:        { open:'46', close:'49', },
		bgWhite:       { open:'47', close:'49', },
	};
	
	const { open, close, }= colors[color];
	
	const replaced= text.replace( new RegExp( `\\x1b\\[${close}m`, 'g', ), `\x1b[${open}m`, );
	
	return `\x1b[${open}m${replaced}\x1b[${close}m`;
}
