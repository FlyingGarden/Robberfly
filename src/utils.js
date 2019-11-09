
export function areOneThing( x, y, )
{
	return new Set( [ x, y, ], ).size === 1;
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
