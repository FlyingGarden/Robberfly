
export function areOneThing( x, y, )
{
	return new Set( [ x, y, ], ).size === 1;
}

export function sameAs( x, y, )
{
	return (
		x === y
	||
		(x !== x && y !== y)
	||
		(x === Infinity && y === -Infinity)
	||
		(x === -Infinity && y === Infinity)
	||
		(
			Array.isArray( x, )
		&&
			Array.isArray( y, )
		&&
			x.length === y.length
		&&
			x.every( ( item, index, )=> sameAs( y[index], item, ), )
		)
	||
		(
			isPureObject( x, )
		&&
			isPureObject( y, )
		&&
			sameAs( Object.entries( x, ), Object.entries( y, ), )
		)
	||
		(
			x instanceof Set
		&&
			y instanceof Set
		&&
			x.size === y.size
		&&
			[ ...x, ].every( item=> y.has( item, ), )
		)
	||
		(
			x instanceof Map
		&&
			y instanceof Map
		&&
			x.size === y.size
		&&
			[ ...x, ].every( ( [ key, value, ], )=> y.has( key, ) && sameAs( y.get( key, ), value, ), )
		)
	);
}

export function isPureObject( x, )
{
	return (
		x
	&&
		typeof x === 'object'
	&&
		x.constructor === Object
	&&
		Reflect.getPrototypeOf( x, ) === Object.prototype
	);
}

export function isRealFunction( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return !code.startsWith( 'class', ) && !code.startsWith( 'async class', );
}

export function isClass( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return code.startsWith( 'class', ) || code.startsWith( 'async class', );
}

export function isAsync( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return code.startsWith( 'async', );
}
