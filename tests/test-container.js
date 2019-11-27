import * as Module from '../src/test-container.js';
import Asserter from '../src/Asserter.js';

console.assert( Object.keys( Module, ).length === 3, 'module test-container must export 3 items.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'collectTests', ), 'module test-container must export \'collectTests\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.collectTests === 'function', 'type of collectTests must be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.collectTests.toString().startsWith( 'async', ), 'collectTests should be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.collectTests.name === 'collectTests', 'name of collectTests must be \'collectTests\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.collectTests.length === 1, 'length of collectTests must be 1.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'requestContainer', ), 'module test-container must export \'requestContainer\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.requestContainer === 'function', 'type of requestContainer must be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.requestContainer.toString().startsWith( 'async', ), 'requestContainer should be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.requestContainer.name === 'requestContainer', 'name of requestContainer must be \'requestContainer\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.requestContainer.length === 0, 'length of requestContainer must be 0.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'addTest', ), 'module test-container must export \'addTest\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.addTest === 'function', 'type of addTest must be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( !Module.addTest.toString().startsWith( 'async', ), 'addTest should not be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.addTest.name === 'addTest', 'name of addTest must be \'addTest\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.addTest.length === 2, 'length of addTest must be 2.', new Error().stack.replace( 'Error:', '', ), );

const { collectTests, requestContainer, addTest, }= Module;

setTimeout( async ()=> {
	const container= await requestContainer();
	
	console.assert( Object.keys( container, ).length === 1, 'assert should have 1 onw property.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( container, 'unload', ), 'container should have prototype \'unload\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( typeof container.unload === 'function', 'type of container.unload should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( container.unload.name === 'unload', 'name of container.unload should be \'unload\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( !container.unload.toString().startsWith( 'async', ), 'container.unload should not be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( container.unload.length === 0, 'length of container.unload should be 0', new Error().stack.replace( 'Error:', '', ), );
	
	const tests= container.unload();
	
	console.assert( Array.isArray( tests, ), 'return of container.unload should be an array.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( tests.length === 0, 'the length of tests should be 0 when no test added.', new Error().stack.replace( 'Error:', '', ), );
}, );

setTimeout( async ()=> {
	const container= await requestContainer();
	
	const testName= 'test-name';
	const testFunction= ()=> {};
	
	console.assert( addTest( testName, testFunction, ) === undefined, 'addTest() must return undefined.', new Error().stack.replace( 'Error:', '', ), );
	
	const tests= container.unload();
	
	console.assert( tests.length === 1, 'the length of tests must be 1 with once addTest().', new Error().stack.replace( 'Error:', '', ), );
	
	const [ testItem, ]= tests;
	
	console.assert( Object.keys( testItem, ).length === 2, 'test item must contains 2 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( testItem, 'name', ), 'test item must has own property \'name\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( testItem.name === testName, 'testItem.name must be the given test name.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( testItem, 'test', ), 'test item must has own property \'test\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( testItem.test === testFunction, 'testItem.test must be the given test function.', new Error().stack.replace( 'Error:', '', ), );
}, );

setTimeout( async ()=> {
	const testName= 'test-name';
	const testFunction= ()=> {};
	
	const tests= await collectTests( ()=> {
		addTest( testName, testFunction, );
	}, );
	
	console.assert( Array.isArray( tests, ), 'return of collectTests should be an promised array.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( tests.length === 1, 'the length of tests must be 1 with once addTest().', new Error().stack.replace( 'Error:', '', ), );
	
	const [ testItem, ]= tests;
	
	console.assert( Object.keys( testItem, ).length === 2, 'test item must contains 2 own properties.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( testItem, 'name', ), 'test item must has own property \'name\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( testItem.name === testName, 'testItem.name must be the given test name.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.prototype.hasOwnProperty.call( testItem, 'test', ), 'test item must has own property \'test\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( testItem.test === testFunction, 'testItem.test must be the given test function.', new Error().stack.replace( 'Error:', '', ), );
}, );

setTimeout( async ()=> {
	const container= await requestContainer();
	
	const testFunction= function testName(){};
	
	addTest( testFunction, );
	
	const [ testItem, ]= container.unload();
	
	console.assert( testItem.name === testFunction.name, 'call addTest with a named function, should use the function name as the test name.', new Error().stack.replace( 'Error:', '', ), );
}, );

{
	let haveRun= false;
	
	addTest( 'auto-run-test', ( asserter, )=> {
		haveRun= true;
		
		console.assert( asserter !== undefined, 'must pass an asserter to the test function.', new Error().stack.replace( 'Error:', '', ), );
		console.assert( asserter instanceof Asserter, 'asserter must an instance of Asserter.', new Error().stack.replace( 'Error:', '', ), );
	}, );
	
	Promise.resolve().then( ()=> {
		console.assert( !haveRun, 'root test must not run at next micro task.', new Error().stack.replace( 'Error:', '', ), );
	}, );
	
	setTimeout( ()=> {
		console.assert( haveRun, 'root test must run automatically at next macro task.', new Error().stack.replace( 'Error:', '', ), );
	}, );
}
