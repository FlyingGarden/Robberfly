import Asserter from './Asserter.js';

export async function executeTest( name, test, )
{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		const probe= ( x, ...a )=> console.warn( x, ...a, `\n${new Error().stack.split( '\n', ).slice( 2, )[0]}`, );
		
		await test( asserter, probe, );
	}
	catch( e )
	{
		error= e;
	}
	
	return {
		name,
		...Asserter.getResult( asserter, ),
		error,
	};
}
