import * as Module from '../Robberfly.js';
import Robberfly from '../src/Robberfly.js';
import { addTest, } from '../src/test-container.js';

console.assert( Module.default === Robberfly, 'root module must export Robberfly as default.', new Error().stack.replace( 'Error:', '', ), );
console.assert( Module.test === addTest, 'root module must export addTest as test.', new Error().stack.replace( 'Error:', '', ), );
