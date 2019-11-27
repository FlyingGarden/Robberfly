import * as Module from '../src/test-executor.js';

console.assert( Object.keys( Module, ).length === 1, 'module test-executor should export 1 items.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'executeTest', ), 'module test-container should export \'executeTest\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.executeTest === 'function', 'type of executeTest should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.executeTest instanceof (async ()=> {}).constructor, 'executeTest should be a async function.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.executeTest.name === 'executeTest', 'name of executeTest should be \'executeTest\'.', new Error().stack.replace( 'Error:', '', ), );

const { executeTest, }= Module;

(async ()=> {
	const testName= 'empty test';
	
	const result= await executeTest( testName, ()=> {}, );
	
	console.assert( result !== undefined, 'Asserter.getResult() should return a result.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result === 'object', 'type of result should be \'object\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( result, ).length === 4, 'result should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'name', ), 'result should have prototype \'name\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result.name === 'string', 'type of result.name should be \'string\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.name === testName, 'result.name should be the same as the given one.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'assertions', ), 'result should have prototype \'assertions\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result.assertions === 'number', 'type of result.assertions should be \'number\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'failures', ), 'result should have prototype \'failures\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Array.isArray( result.failures, ), 'result.failures should be an array', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'error', ), 'result should have prototype \'error\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( result.assertions === 0, 'result.assertions should be 0 when the test is empty.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'length of result.failures should be 0 when the test is empty.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.error === undefined, 'result.error should be undefined when the test not throw anything.', new Error().stack.replace( 'Error:', '', ), );
})();

(async ()=> {
	const testName= 'successful test';
	
	const result= await executeTest( testName, ( { assertTo, }, )=> {
		assertTo( true, );
	}, );
	
	console.assert( result.assertions === 1, 'result.assertions should be 1 when the test has one successful assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'length of result.failures should be 0 when the test has no failed assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.error === undefined, 'result.error should be undefined when the test not throw anything.', new Error().stack.replace( 'Error:', '', ), );
})();

(async ()=> {
	const testName= 'failed test';
	
	const result= await executeTest( testName, ( { assertTo, }, )=> {
		assertTo( false, );
		assertTo( true, );
	}, );
	
	console.assert( result.assertions === 2, 'result.assertions should be 2 when the test has one successful assertion and one failed assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 1, 'length of result.failures should be 1 when the test has one failed assertions.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.error === undefined, 'result.error should be undefined when the test not throw anything.', new Error().stack.replace( 'Error:', '', ), );
})();

(async ()=> {
	const testName= 'error test';
	let error;
	
	const result= await executeTest( testName, ( { assertTo, }, )=> {
		assertTo( true, );
		
		throw error= new Error();
		
		assertTo( false, );
	}, );
	
	console.assert( result.assertions === 1, 'result.assertions should be 1 when the test has one assertion before throwing.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'length of result.failures should be 0 when the test has no failed assertion before throwing.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.error !== undefined, 'result.error should be defined when the test throw something.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.error === error, 'result.error should be the same as what the test throws.', new Error().stack.replace( 'Error:', '', ), );
})();
