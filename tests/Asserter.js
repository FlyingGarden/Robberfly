import * as Module from '../src/Asserter.js';

console.assert( Object.keys( Module, ).length === 1, 'module Asserter should export 1 items.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'default', ), 'module test-container should export \'default\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.default === 'function', 'type of default export should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.default.name === 'Asserter', 'name of default export should be \'Asserter\'.', new Error().stack.replace( 'Error:', '', ), );

const { default:Asserter, }= Module;

console.assert( Asserter.toString().startsWith( 'class', ), 'Asserter should be a class.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Asserter.length === 0, 'length of Asserter should be 0.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Asserter, 'getResult', ), 'Asserter should have own prototype \'getResult\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Asserter.getResult === 'function', 'type of Asserter.getResult should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Asserter.getResult.name === 'getResult', 'name of Asserter.getResult should be \'getResult\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Asserter.getResult.length === 1, 'length of Asserter.getResult should be 1', new Error().stack.replace( 'Error:', '', ), );

{
	const asserter= new Asserter();
	
	console.assert( asserter instanceof Asserter, 'new Asserter() should returns an instance of Asserter', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.constructor === Asserter, 'new Asserter() should returns an object with constructor Asserter', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.keys( asserter, ).length === 18, 'asserter should have 18 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertTo', ), 'asserter should have own prototype \'assertTo\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertTo === 'function', 'type of asserter.assertTo should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertTo.name === 'assertTo', 'name of asserter.assertTo should be \'assertTo\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertTo.length === 1, 'length of asserter.assertTo should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertNotTo', ), 'asserter should have own prototype \'assertNotTo\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertNotTo === 'function', 'type of asserter.assertNotTo should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotTo.name === 'assertNotTo', 'name of asserter.assertNotTo should be \'assertNotTo\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotTo.length === 1, 'length of asserter.assertNotTo should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertBe', ), 'asserter should have own prototype \'assertBe\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertBe === 'function', 'type of asserter.assertBe should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertBe.name === 'assertBe', 'name of asserter.assertBe should be \'assertBe\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertBe.length === 2, 'length of asserter.assertBe should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertNotBe', ), 'asserter should have own prototype \'assertNotBe\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertNotBe === 'function', 'type of asserter.assertNotBe should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotBe.name === 'assertNotBe', 'name of asserter.assertNotBe should be \'assertNotBe\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotBe.length === 2, 'length of asserter.assertNotBe should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertAs', ), 'asserter should have own prototype \'assertAs\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertAs === 'function', 'type of asserter.assertAs should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertAs.name === 'assertAs', 'name of asserter.assertAs should be \'assertAs\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertAs.length === 2, 'length of asserter.assertAs should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertNotAs', ), 'asserter should have own prototype \'assertNotAs\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertNotAs === 'function', 'type of asserter.assertNotAs should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotAs.name === 'assertNotAs', 'name of asserter.assertNotAs should be \'assertNotAs\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotAs.length === 2, 'length of asserter.assertNotAs should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertMatch', ), 'asserter should have own prototype \'assertMatch\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertMatch === 'function', 'type of asserter.assertMatch should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertMatch.name === 'assertMatch', 'name of asserter.assertMatch should be \'assertMatch\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertMatch.length === 2, 'length of asserter.assertMatch should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertInstanceOf', ), 'asserter should have own prototype \'assertInstanceOf\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertInstanceOf === 'function', 'type of asserter.assertInstanceOf should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertInstanceOf.name === 'assertInstanceOf', 'name of asserter.assertInstanceOf should be \'assertInstanceOf\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertInstanceOf.length === 2, 'length of asserter.assertInstanceOf should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertOwn', ), 'asserter should have own prototype \'assertOwn\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertOwn === 'function', 'type of asserter.assertOwn should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertOwn.name === 'assertOwn', 'name of asserter.assertOwn should be \'assertOwn\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertOwn.length === 2, 'length of asserter.assertOwn should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertNotOwn', ), 'asserter should have own prototype \'assertNotOwn\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertNotOwn === 'function', 'type of asserter.assertNotOwn should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotOwn.name === 'assertNotOwn', 'name of asserter.assertNotOwn should be \'assertNotOwn\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotOwn.length === 2, 'length of asserter.assertNotOwn should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertFunction', ), 'asserter should have own prototype \'assertFunction\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertFunction === 'function', 'type of asserter.assertFunction should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertFunction.name === 'assertFunction', 'name of asserter.assertFunction should be \'assertFunction\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertFunction.length === 1, 'length of asserter.assertFunction should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertClass', ), 'asserter should have own prototype \'assertClass\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertClass === 'function', 'type of asserter.assertClass should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertClass.name === 'assertClass', 'name of asserter.assertClass should be \'assertClass\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertClass.length === 1, 'length of asserter.assertClass should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertAsync', ), 'asserter should have own prototype \'assertAsync\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertAsync === 'function', 'type of asserter.assertAsync should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertAsync.name === 'assertAsync', 'name of asserter.assertAsync should be \'assertAsync\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertAsync.length === 1, 'length of asserter.assertAsync should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertThrow', ), 'asserter should have own prototype \'assertThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertThrow === 'function', 'type of asserter.assertThrow should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertThrow.name === 'assertThrow', 'name of asserter.assertThrow should be \'assertThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertThrow.length === 2, 'length of asserter.assertThrow should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertThrowInstanceOf', ), 'asserter should have own prototype \'assertThrowInstanceOf\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertThrowInstanceOf === 'function', 'type of asserter.assertThrowInstanceOf should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertThrowInstanceOf.name === 'assertThrowInstanceOf', 'name of asserter.assertThrowInstanceOf should be \'assertThrowInstanceOf\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertThrowInstanceOf.length === 2, 'length of asserter.assertThrowInstanceOf should be 2', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertToThrow', ), 'asserter should have own prototype \'assertToThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertToThrow === 'function', 'type of asserter.assertToThrow should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertToThrow.name === 'assertToThrow', 'name of asserter.assertToThrow should be \'assertToThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertToThrow.length === 1, 'length of asserter.assertToThrow should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertNotThrow', ), 'asserter should have own prototype \'assertNotThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertNotThrow === 'function', 'type of asserter.assertNotThrow should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotThrow.name === 'assertNotThrow', 'name of asserter.assertNotThrow should be \'assertNotThrow\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertNotThrow.length === 1, 'length of asserter.assertNotThrow should be 1', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( asserter, 'assertRun', ), 'asserter should have own prototype \'assertRun\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof asserter.assertRun === 'function', 'type of asserter.assertRun should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertRun.name === 'assertRun', 'name of asserter.assertRun should be \'assertRun\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( asserter.assertRun.length === 0, 'length of asserter.assertRun should be 0', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result !== undefined, 'Asserter.getResult() should return a result.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result === 'object', 'type of result should be \'object\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( result, ).length === 2, 'result should have 2 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'assertions', ), 'result should have own prototype \'assertions\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result.assertions === 'number', 'type of result.assertions should be \'number\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'failures', ), 'result should have own prototype \'failures\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Array.isArray( result.failures, ), 'result.failures should be an array', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( result.failures !== Asserter.getResult( asserter, ).failures, 'must not return the same failures array for each getResult() call.', );
}

{
	const asserter= new Asserter();
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result !== undefined, 'Asserter.getResult() should return a result.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result === 'object', 'type of result should be \'object\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( result, ).length === 2, 'result should have 2 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'assertions', ), 'result should have own prototype \'assertions\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof result.assertions === 'number', 'type of result.assertions should be \'number\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( result, 'failures', ), 'result should have own prototype \'failures\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Array.isArray( result.failures, ), 'result.failures should be an array', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( result.assertions === 0, 'result.assertions should be 0 without any assertions.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'length of result.failures should be 0 without any assertions.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( result.failures !== Asserter.getResult( asserter, ).failures, 'must not return the same failures array for each getResult() call.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	(asserter.assertTo)( 'true', true, );
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 1, 'result.assertions should be 1 after a successful assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'length of result.failures should be 0 after a successful assertion.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	(asserter.assertTo)( false, );
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 1, 'result.assertions should be 1 after a successful assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 1, 'length of result.failures should be 1 after a successful assertion.', new Error().stack.replace( 'Error:', '', ), );
	
	const [ failure, ]= result.failures;
	
	console.assert( typeof failure === 'object', 'type of failure should be \'object\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failure, ), 'failure should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( failure, 'type', ), 'failure should have own prototype \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failure.type === 'string', 'type of failure.type should be \'string\'.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	(asserter.assertTo)( true, );
	(asserter.assertNotTo)( false, );
	(asserter.assertBe)( 1, 1, );
	(asserter.assertNotBe)( 1, 2, );
	(asserter.assertAs)( 1, 1, );
	(asserter.assertNotAs)( 1, 2, );
	(asserter.assertMatch)( '666', /\d/, );
	(asserter.assertInstanceOf)( [], Array, );
	(asserter.assertOwn)( { foo:1, }, 'foo', );
	(asserter.assertNotOwn)( { foo:1, }, 'bar', );
	(asserter.assertFunction)( ()=> {}, );
	(asserter.assertClass)( class {}, );
	(asserter.assertAsync)( async ()=> {}, );
	(asserter.assertThrow)( 1, ()=> { throw 1; }, );
	(asserter.assertThrowInstanceOf)( Error, ()=> { throw new Error(); }, );
	(asserter.assertToThrow)( ()=> { throw 'something'; }, );
	(asserter.assertNotThrow)( ()=> {}, );
	{
		const { run, assert, }= asserter.assertRun();
		
		run();
		
		assert();
	}
	{
		const { run, assert, }= asserter.assertRun();
		
		run();
		run();
		
		assert( 2, );
	}
	{
		const { run, assert, }= asserter.assertRun();
		
		run( 0, );
		run( 1, );
		run( 2, );
		
		assert();
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 20, 'there should be 20 assertions.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'there should be 0 failures.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	(asserter.assertTo)( false, );
	(asserter.assertNotTo)( true, );
	(asserter.assertBe)( 1, 2, );
	(asserter.assertNotBe)( 1, 1, );
	(asserter.assertAs)( 1, 2, );
	(asserter.assertNotAs)( 1, 1, );
	(asserter.assertMatch)( ['abc'], /\d/, );
	(asserter.assertInstanceOf)( {}, Array, );
	(asserter.assertOwn)( {}, 'foo', );
	(asserter.assertNotOwn)( { 'foo':1, }, 'foo', );
	(asserter.assertFunction)( class {}, );
	(asserter.assertClass)( function (){}, );
	(asserter.assertAsync)( ()=> {}, );
	(asserter.assertThrow)( 2, ()=> { throw 1; }, );
	(asserter.assertThrowInstanceOf)( String, ()=> { throw true; }, );
	(asserter.assertToThrow)( ()=> {}, );
	(asserter.assertNotThrow)( ()=> { throw 'something'; }, );
	{
		const { run, assert, }= asserter.assertRun();
		
		assert();
	}
	{
		const { run, assert, }= asserter.assertRun();
		
		run();
		
		assert( 2, );
	}
	{
		const { run, assert, }= asserter.assertRun();
		
		run( 0, );
		run( 2, );
		
		assert();
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 20, 'there should be 20 assertions.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 20, 'there should be 20 failures.', new Error().stack.replace( 'Error:', '', ), );
	
	const [
		failToAssertTo,
		failToAssertNotTo,
		failToAssertBe,
		failToAssertNotBe,
		failToAssertAs,
		failToAssertNotAs,
		failToAssertMatch,
		failToAssertInstanceOf,
		failToAssertOwn,
		failToAssertNotOwn,
		failToAssertFunction,
		failToAssertClass,
		failToAssertAsync,
		failToAssertThrow,
		failToAssertThrowInstanceOf,
		failToAssertToThrow,
		failToAssertNotThrow,
		failToAssertRun,
		failToAssertRunTimes,
		failToAssertRunOrder,
	]= result.failures;
	
	console.assert( failToAssertTo instanceof Object, 'failure of assertTo should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertTo, ), 'failure of assertTo should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertTo, ).length === 3, 'failure of assertTo should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertTo, 'type', ), 'failure of assertTo should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertTo.type === 'string', 'property \'type\' of failure of assertTo should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertTo.type === 'to', 'property \'type\' of failure of assertTo should be \'to\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertTo, 'trace', ), 'failure of assertTo should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertTo.trace === 'string', 'property \'trace\' of failure of assertTo should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertTo, 'condition', ), 'failure of assertTo should have own property \'condition\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertNotTo instanceof Object, 'failure of assertNotTo should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertNotTo, ), 'failure of assertNotTo should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertNotTo, ).length === 3, 'failure of assertNotTo should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotTo, 'type', ), 'failure of assertNotTo should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotTo.type === 'string', 'property \'type\' of failure of assertNotTo should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertNotTo.type === 'not_to', 'property \'type\' of failure of assertNotTo should be \'not_to\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotTo, 'trace', ), 'failure of assertNotTo should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotTo.trace === 'string', 'property \'trace\' of failure of assertNotTo should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotTo, 'trace', ), 'failure of assertNotTo should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertTo, 'condition', ), 'failure of assertTo should have own property \'condition\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertBe instanceof Object, 'failure of assertBe should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertBe, ), 'failure of assertBe should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertBe, ).length === 4, 'failure of assertBe should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertBe, 'type', ), 'failure of assertBe should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertBe.type === 'string', 'property \'type\' of failure of assertBe should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertBe.type === 'be', 'property \'type\' of failure of assertBe should be \'be\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertBe, 'trace', ), 'failure of assertBe should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertBe.trace === 'string', 'property \'trace\' of failure of assertBe should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertBe, 'value', ), 'failure of assertBe should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertBe, 'expect', ), 'failure of assertBe should have own property \'expect\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertNotBe instanceof Object, 'failure of assertNotBe should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertNotBe, ), 'failure of assertNotBe should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertNotBe, ).length === 3, 'failure of assertNotBe should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotBe, 'type', ), 'failure of assertNotBe should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotBe.type === 'string', 'property \'type\' of failure of assertNotBe should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertNotBe.type === 'not_be', 'property \'type\' of failure of assertNotBe should be \'not_be\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotBe, 'trace', ), 'failure of assertNotBe should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotBe.trace === 'string', 'property \'trace\' of failure of assertNotBe should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotBe, 'value', ), 'failure of assertNotBe should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertAs instanceof Object, 'failure of assertAs should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertAs, ), 'failure of assertAs should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertAs, ).length === 4, 'failure of assertAs should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAs, 'type', ), 'failure of assertAs should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertAs.type === 'string', 'property \'type\' of failure of assertAs should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertAs.type === 'as', 'property \'type\' of failure of assertAs should be \'as\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAs, 'trace', ), 'failure of assertAs should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertAs.trace === 'string', 'property \'trace\' of failure of assertAs should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAs, 'value', ), 'failure of assertAs should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAs, 'expect', ), 'failure of assertAs should have own property \'expect\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertNotAs instanceof Object, 'failure of assertNotAs should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertNotAs, ), 'failure of assertNotAs should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertNotAs, ).length === 3, 'failure of assertNotAs should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotAs, 'type', ), 'failure of assertNotAs should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotAs.type === 'string', 'property \'type\' of failure of assertNotAs should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertNotAs.type === 'not_as', 'property \'type\' of failure of assertNotAs should be \'not_as\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotAs, 'trace', ), 'failure of assertNotAs should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotAs.trace === 'string', 'property \'trace\' of failure of assertNotAs should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotAs, 'value', ), 'failure of assertNotAs should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertMatch instanceof Object, 'failure of assertMatch should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertMatch, ), 'failure of assertMatch should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertMatch, ).length === 4, 'failure of assertMatch should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertMatch, 'type', ), 'failure of assertMatch should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertMatch.type === 'string', 'property \'type\' of failure of assertMatch should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertMatch.type === 'match', 'property \'type\' of failure of assertMatch should be \'match\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertMatch, 'trace', ), 'failure of assertMatch should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertMatch.trace === 'string', 'property \'trace\' of failure of assertMatch should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertMatch, 'value', ), 'failure of assertMatch should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertMatch.value === 'string', 'property \'value\' of failure of assertMatch should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertMatch, 'regexp', ), 'failure of assertMatch should have own property \'regexp\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertMatch.regexp instanceof RegExp, 'property \'regexp\' of failure of assertMatch should be an instance of RegExp.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertInstanceOf instanceof Object, 'failure of assertInstanceOf should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertInstanceOf, ), 'failure of assertInstanceOf should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertInstanceOf, ).length === 4, 'failure of assertInstanceOf should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertInstanceOf, 'type', ), 'failure of assertInstanceOf should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertInstanceOf.type === 'string', 'property \'type\' of failure of assertInstanceOf should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertInstanceOf.type === 'instance_of', 'property \'type\' of failure of assertInstanceOf should be \'instance_of\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertInstanceOf, 'trace', ), 'failure of assertInstanceOf should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertInstanceOf.trace === 'string', 'property \'trace\' of failure of assertInstanceOf should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertInstanceOf, 'value', ), 'failure of assertInstanceOf should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertInstanceOf, 'expectClass', ), 'failure of assertInstanceOf should have own property \'expectClass\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertOwn instanceof Object, 'failure of assertOwn should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertOwn, ), 'failure of assertOwn should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertOwn, ).length === 4, 'failure of assertOwn should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertOwn, 'type', ), 'failure of assertOwn should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertOwn.type === 'string', 'property \'type\' of failure of assertOwn should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertOwn.type === 'own', 'property \'type\' of failure of assertOwn should be \'own\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertOwn, 'trace', ), 'failure of assertOwn should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertOwn.trace === 'string', 'property \'trace\' of failure of assertOwn should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertOwn, 'value', ), 'failure of assertOwn should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertOwn, 'expectProperty', ), 'failure of assertOwn should have own property \'expectProperty\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertNotOwn instanceof Object, 'failure of assertNotOwn should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertNotOwn, ), 'failure of assertNotOwn should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertNotOwn, ).length === 4, 'failure of assertNotOwn should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotOwn, 'type', ), 'failure of assertNotOwn should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotOwn.type === 'string', 'property \'type\' of failure of assertNotOwn should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertNotOwn.type === 'not_own', 'property \'type\' of failure of assertNotOwn should be \'not_own\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotOwn, 'trace', ), 'failure of assertNotOwn should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotOwn.trace === 'string', 'property \'trace\' of failure of assertNotOwn should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotOwn, 'value', ), 'failure of assertNotOwn should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotOwn, 'expectProperty', ), 'failure of assertNotOwn should have own property \'expectProperty\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertFunction instanceof Object, 'failure of assertFunction should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertFunction, ), 'failure of assertFunction should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertFunction, ).length === 3, 'failure of assertFunction should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertFunction, 'type', ), 'failure of assertFunction should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertFunction.type === 'string', 'property \'type\' of failure of assertFunction should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertFunction.type === 'function', 'property \'type\' of failure of assertFunction should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertFunction, 'trace', ), 'failure of assertFunction should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertFunction.trace === 'string', 'property \'trace\' of failure of assertFunction should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertFunction, 'value', ), 'failure of assertFunction should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertClass instanceof Object, 'failure of assertClass should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertClass, ), 'failure of assertClass should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertClass, ).length === 3, 'failure of assertClass should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertClass, 'type', ), 'failure of assertClass should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertClass.type === 'string', 'property \'type\' of failure of assertClass should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertClass.type === 'class', 'property \'type\' of failure of assertClass should be \'class\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertClass, 'trace', ), 'failure of assertClass should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertClass.trace === 'string', 'property \'trace\' of failure of assertClass should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertClass, 'value', ), 'failure of assertClass should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertAsync instanceof Object, 'failure of assertAsync should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertAsync, ), 'failure of assertAsync should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertAsync, ).length === 3, 'failure of assertAsync should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAsync, 'type', ), 'failure of assertAsync should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertAsync.type === 'string', 'property \'type\' of failure of assertAsync should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertAsync.type === 'async', 'property \'type\' of failure of assertAsync should be \'async\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAsync, 'trace', ), 'failure of assertAsync should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertAsync.trace === 'string', 'property \'trace\' of failure of assertAsync should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertAsync, 'value', ), 'failure of assertAsync should have own property \'value\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertThrow instanceof Object, 'failure of assertThrow should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertThrow, ), 'failure of assertThrow should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertThrow, ).length === 4, 'failure of assertThrow should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrow, 'type', ), 'failure of assertThrow should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertThrow.type === 'string', 'property \'type\' of failure of assertThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertThrow.type === 'throw', 'property \'type\' of failure of assertThrow should be \'throw\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrow, 'trace', ), 'failure of assertThrow should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertThrow.trace === 'string', 'property \'trace\' of failure of assertThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrow, 'error', ), 'failure of assertThrow should have own property \'error\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrow, 'expectError', ), 'failure of assertThrow should have own property \'expectError\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertThrowInstanceOf instanceof Object, 'failure of assertThrowInstanceOf should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertThrowInstanceOf, ), 'failure of assertThrowInstanceOf should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertThrowInstanceOf, ).length === 4, 'failure of assertThrowInstanceOf should have 4 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrowInstanceOf, 'type', ), 'failure of assertThrowInstanceOf should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertThrowInstanceOf.type === 'string', 'property \'type\' of failure of assertThrowInstanceOf should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertThrowInstanceOf.type === 'throw_instance_of', 'property \'type\' of failure of assertThrowInstanceOf should be \'throw_instance_of\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrowInstanceOf, 'trace', ), 'failure of assertThrowInstanceOf should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertThrowInstanceOf.trace === 'string', 'property \'trace\' of failure of assertThrowInstanceOf should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrowInstanceOf, 'error', ), 'failure of assertThrowInstanceOf should have own property \'error\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertThrowInstanceOf, 'expectErrorClass', ), 'failure of assertThrowInstanceOf should have own property \'expectErrorClass\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertToThrow instanceof Object, 'failure of assertToThrow should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertToThrow, ), 'failure of assertToThrow should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertToThrow, ).length === 2, 'failure of assertToThrow should have 2 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertToThrow, 'type', ), 'failure of assertToThrow should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertToThrow.type === 'string', 'property \'type\' of failure of assertToThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertToThrow.type === 'to_throw_something', 'property \'type\' of failure of assertToThrow should be \'to_throw_something\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertToThrow, 'trace', ), 'failure of assertToThrow should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertToThrow.trace === 'string', 'property \'trace\' of failure of assertToThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertNotThrow instanceof Object, 'failure of assertNotThrow should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertNotThrow, ), 'failure of assertNotThrow should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertNotThrow, ).length === 3, 'failure of assertNotThrow should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotThrow, 'type', ), 'failure of assertNotThrow should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotThrow.type === 'string', 'property \'type\' of failure of assertNotThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertNotThrow.type === 'not_throw', 'property \'type\' of failure of assertNotThrow should be \'not_throw\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotThrow, 'trace', ), 'failure of assertNotThrow should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertNotThrow.trace === 'string', 'property \'trace\' of failure of assertNotThrow should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertNotThrow, 'error', ), 'failure of assertNotThrow should have own property \'error\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertRun instanceof Object, 'failure of assertRun should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertRun, ), 'failure of assertRun should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertRun, ).length === 2, 'failure of assertRun should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRun, 'type', ), 'failure of assertRun should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRun.type === 'string', 'property \'type\' of failure of assertRun should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertRun.type === 'run', 'property \'type\' of failure of assertRun should be \'run\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRun, 'trace', ), 'failure of assertRun should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRun.trace === 'string', 'property \'trace\' of failure of assertRun should be a string.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertRunTimes instanceof Object, 'failure of assertRun about times should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertRunTimes, ), 'failure of assertRun about times should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertRunTimes, ).length === 4, 'failure of assertRun about times should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunTimes, 'type', ), 'failure of assertRun about times should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRunTimes.type === 'string', 'property \'type\' of failure of assertRun about times should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertRunTimes.type === 'run_times', 'property \'type\' of failure of assertRun about times should be \'run_times\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunTimes, 'trace', ), 'failure of assertRun about times should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRunTimes.trace === 'string', 'property \'trace\' of failure of assertRun about times should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunTimes, 'times', ), 'failure of assertRun about times should have own property \'times\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunTimes, 'expectTimes', ), 'failure of assertRun about times should have own property \'expectTimes\'.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( failToAssertRunOrder instanceof Object, 'failure of assertRun about order should be an object.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.isFrozen( failToAssertRunOrder, ), 'failure of assertRun about order should be frozen.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.keys( failToAssertRunOrder, ).length === 4, 'failure of assertRun about order should have 3 own properties.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunOrder, 'type', ), 'failure of assertRun about order should have own property \'type\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRunOrder.type === 'string', 'property \'type\' of failure of assertRun about order should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( failToAssertRunOrder.type === 'run_order', 'property \'type\' of failure of assertRun about order should be \'run_order\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunOrder, 'trace', ), 'failure of assertRun about order should have own property \'trace\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof failToAssertRunOrder.trace === 'string', 'property \'trace\' of failure of assertRun about order should be a string.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunOrder, 'index', ), 'failure of assertRun about order should have own property \'index\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( Object.prototype.hasOwnProperty.call( failToAssertRunOrder, 'expectIndex', ), 'failure of assertRun about order should have own property \'expectIndex\'.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		(asserter.assertThrow)( 'error', 'not-a-function', );
	}
	catch( e )
	{
		error= e;
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 0, 'give a non-function parameter to assertThrow should not be a valid assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'give a non-function parameter to assertThrow should cause a failure.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( error !== undefined, 'give a non-function parameter to assertThrow should cause an error.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error instanceof TypeError, 'give a non-function parameter to assertThrow should cause an TypeError.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error.message === 'callback for assertThrow() must be a function and not be a class.', 'give a non-function parameter to assertThrow should cause an TypeError with message:\n\'callback for assertThrow() must be a function and not be a class.\'.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		(asserter.assertThrowInstanceOf)( Error, class{}, );
	}
	catch( e )
	{
		error= e;
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 0, 'give a non-function parameter to assertThrowInstanceOf should not be a valid assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'give a non-function parameter to assertThrowInstanceOf should cause a failure.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( error !== undefined, 'give a non-function parameter to assertThrowInstanceOf should cause an error.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error instanceof TypeError, 'give a non-function parameter to assertThrow should cause an TypeError.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error.message === 'callback for assertThrowInstanceOf() must be a function and not be a class.', 'give a non-function parameter to assertThrow should cause an TypeError with message:\n\'callback for assertThrowInstanceOf() must be a function and not be a class.\'.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		(asserter.assertToThrow)( NaN, );
	}
	catch( e )
	{
		error= e;
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 0, 'give a non-function parameter to assertToThrow should not be a valid assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'give a non-function parameter to assertToThrow should cause a failure.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( error !== undefined, 'give a non-function parameter to assertToThrow should cause an error.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error instanceof TypeError, 'give a non-function parameter to assertThrow should cause an TypeError.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error.message === 'callback for assertToThrow() must be a function and not be a class.', 'give a non-function parameter to assertThrow should cause an TypeError with message:\n\'callback for assertToThrow() must be a function and not be a class.\'.', new Error().stack.replace( 'Error:', '', ), );
}

{
	const asserter= new Asserter();
	
	let error= undefined;
	
	try
	{
		(asserter.assertNotThrow)( 'not-a-function', );
	}
	catch( e )
	{
		error= e;
	}
	
	const result= Asserter.getResult( asserter, );
	
	console.assert( result.assertions === 0, 'give a non-function parameter to assertNotThrow should not be a valid assertion.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( result.failures.length === 0, 'give a non-function parameter to assertNotThrow should cause a failure.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( error !== undefined, 'give a non-function parameter to assertNotThrow should cause an error.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error instanceof TypeError, 'give a non-function parameter to assertThrow should cause an TypeError.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( error.message === 'callback for assertNotThrow() must be a function and not be a class.', 'give a non-function parameter to assertThrow should cause an TypeError with message:\n\'callback for assertNotThrow() must be a function and not be a class.\'.', new Error().stack.replace( 'Error:', '', ), );
}
