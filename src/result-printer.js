import env from './env.js';

const printerEnv= env|| 'console';

export async function printResult( result, )
{
	return print( 'Result', result, );
}

export async function printResults( results, )
{
	if( results.length === 1 )
		return printResult( results[0], );
	
	return print( 'Results', results, );
}

async function print( target, data, )
{
	const [ Renderer, Printer, ]= await Promise.all( [
		import (`./${printerEnv}/renderer.js`),
		import (`./${printerEnv}/printer.js`),
	], );
	
	const output= await Renderer[`render${target}`]( data, );
	
	return Printer.print( output, );
}
