
export default class Styled
{
	#style;
	
	#children;
	
	constructor( style, ...children )
	{
		this.#style= style;
		this.#children= children;
	}
	
	setup()
	{
		return Object.entries( this.#style, ).map( ( [ key, value, ], )=> `${key}:${value};`, ).join( '', );
	}
	
	unset()
	{
		return Object.keys( this.#style, ).map( key=> `${key}:unset;`, ).join( '', );
	}
	
	get children()
	{
		return [ ...this.#children, ];
	}
}
