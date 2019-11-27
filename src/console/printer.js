import Styled from './Styled.js';

export function print( output, )
{
	for( const { type, data=[], ...item } of output.flat( Infinity, ) )
	{
		const { contents, formats, }= format( ...data, );
		
		console[type]( contents.join( '', ), ...formats, );
		
		if( type === 'group' || type === 'groupCollapsed' )
		{
			print( item.children, );
			
			console.groupEnd();
		}
	}
}

function format( ...data )
{
	const contents= [];
	const formats= [];
	
	for( const item of data )
	switch( typeof item )
	{
		case 'string':
			contents.push( item, );
		break;
		
		case 'number':
		{
			contents.push( '%f', );
			formats.push( item, );
		}
		break;
		
		case 'bigint':
		{
			contents.push( '%i', );
			formats.push( item, );
		}
		break;
		
		case 'object':
		if( item instanceof Styled )
		{
			contents.push( '%c', );
			formats.push( item.setup(), );
			
			const { contents:subContents, formats:subFormats, }= format( ...item.children, );
			contents.push( ...subContents, );
			formats.push( ...subFormats, );
			
			contents.push( '%c', );
			formats.push( item.unset(), );
			break;
		}
		
		default:
		{
			contents.push( '%o', );
			formats.push( item, );
		}
		break;
	}
	
	return { contents, formats, };
}
