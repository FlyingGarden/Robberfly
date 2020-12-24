import * as Module from '../src/Robberfly.js';

console.assert( Object.keys( Module, ).length === 1, 'module Robberfly must export 1 items.', new Error().stack.replace( 'Error:', '', ), );

console.assert( Object.prototype.hasOwnProperty.call( Module, 'default', ), 'module Robberfly should export \'default\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( typeof Module.default === 'function', 'type of default export should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.default.name === 'Robberfly', 'name of default export should be \'Robberfly\'.', new Error().stack.replace( 'Error:', '', ), );

const { default:Robberfly, }= Module

console.assert( Robberfly.toString().startsWith( 'class', ), 'Robberfly should be a class.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Robberfly.length === 0, 'length of Robberfly constructor should be 0.', new Error().stack.replace( 'Error:', '', ), );

{
	const robberfly= new Robberfly();
	
	console.assert( robberfly instanceof Robberfly, 'new Robberfly() must returns an instance of Robberfly.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( robberfly.constructor === Robberfly, 'new Robberfly() must returns an object with constructor Robberfly.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( Object.keys( robberfly, ).length === 0, 'robberfly should have 0 own property.', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( typeof robberfly.addPath === 'function', 'type of robberfly.addPath should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( !robberfly.addPath.toString().startsWith( 'async', ), 'robberfly.addPath should not be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( robberfly.addPath.name === 'addPath', 'name of robberfly.addPath should be \'addPath\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( robberfly.addPath.length === 0, 'length of robberfly.addPath should be 0', new Error().stack.replace( 'Error:', '', ), );
	
	console.assert( typeof robberfly.addPath === 'function', 'type of robberfly.addPath should be \'function\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( !robberfly.addPath.toString().startsWith( 'async', ), 'robberfly.addPath should not be asynchronous.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( robberfly.addPath.name === 'addPath', 'name of robberfly.addPath should be \'addPath\'.', new Error().stack.replace( 'Error:', '', ), );
	console.assert( robberfly.addPath.length === 0, 'length of robberfly.addPath should be 0', new Error().stack.replace( 'Error:', '', ), );
	
	robberfly.addPath( '../test.js', );
	robberfly.run();
	robberfly.runSerially();
	robberfly.runIso();
	robberfly.runIsoSerially();
	(await robberfly.runIsoEach()).print();
}
