export {
	areOneThing,
	sameAs,
	isPureObject,
	isRealFunction,
	isClass,
	isAsync,
};

function areOneThing( x, y, )
{
	return [ x, ].includes( y, );
}

function sameAs( x, y, )
{
	return (
		x === y
	||
		(x !== x && y !== y)
	||
		(
			Array.isArray( x, )
		&&
			Array.isArray( y, )
		&&
			x.length === y.length
		&&
			[ ...x, ].every( ( item, index, )=> sameAs( y[index], item, ), )
		)
	||
		(
			isPureObject( x, )
		&&
			isPureObject( y, )
		&&
			(( keysX, keysY, )=> (
				keysX.length === keysY.length
			&&
				new Set( [ ...keysX, ...keysY, ], ).size === keysX.length
			&&
				keysX.every( key=> sameAs( x[key], y[key], ), )
			))( Object.keys( x, ), Object.keys( y, ) )
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

function isPureObject( x, )
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

function isRealFunction( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return !code.startsWith( 'class', ) && !code.startsWith( 'async class', );
}

function isClass( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return code.startsWith( 'class', ) || code.startsWith( 'async class', );
}

function isAsync( value, )
{
	if( typeof value !== 'function' )
		return false;
	
	const code= value.toString();
	
	return code.startsWith( 'async', );
}
