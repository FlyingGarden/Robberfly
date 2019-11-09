
let holding= undefined;
let container= undefined;
const rootContainer= [];

export async function collectTests( callback, )
{
	const container= await requestContainer();
	
	await callback();
	
	return container.unload();
}

export async function requestContainer()
{
	while( holding )
		await holding;
	
	let free;
	holding= new Promise( resolve=> {
		free= resolve;
	}, );
	
	container= [];
	
	return {
		unload(){
			
			const tests= container;
			
			holding= undefined;
			container= undefined;
			
			free();
			
			return tests;
		},
	};
}

export function addTest( name, test, )
{
	if( typeof name === 'function' )
		return addTest( name.name, name, );
	
	(container|| rootContainer).push( { name, test, }, );
}
