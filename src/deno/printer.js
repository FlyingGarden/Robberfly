export { print, };

async function print( text, )
{
	const encoder= new TextEncoder();
	
	await Deno.stdout.write( encoder.encode( text, ), );
}
