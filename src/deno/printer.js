
export function print( text, )
{
	const encoder= new TextEncoder();
	
	Deno.stdout.write( encoder.encode( text, ), );
}
