import env from './env.js';
export { printResult, printResults, };

const printerEnv= env|| 'console';

async function printResult( result, )
{
	return print( 'Result', result, );
}

async function printResults( results, )
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
