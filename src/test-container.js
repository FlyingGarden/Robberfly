
let container= undefined;
const rootContainer= [];

export async function collectTests( callback, )
{
	
}

export async function requestContainer()
{
	
}

export function addTest( name, test, )
{
	if( typeof name === 'function' )
		return addTest( name.name, name, );
	
	(container|| rootContainer).push( { name, test, }, );
}
