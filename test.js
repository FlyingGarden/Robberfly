import { test, } from './Robberfly.js';

test( 'minimum case', ( { assertBe, assertAs, assertThrow, }, )=> {
	const foo= 1;
	
	assertBe( foo, 2, );
	assertAs( [foo], [foo], );
	assertThrow( new Error(), ()=> {
		throw new Error();
	}, );
	// throw new Error();
}, );
