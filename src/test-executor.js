import Asserter from './Asserter.js';

export async function executeTest( name, test, )
{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		await test( asserter, );
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
