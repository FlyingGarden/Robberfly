Robberfly
================================

Robberfly, for catching bugs, a test suit for JS. 


## Minimum Case

You can build a minimum test case with Robberfly. 

```javascript
import { test, } from 'https://robberfly.fenz.land/Robberfly.js';

test( 'minimum case', ( { assertBe, }, )=> {
	assertBe( 1, 2, );
}, );

```

You can just run this little case in browsers, Deno or other JS environments. 
Robberfly will throw below message like this: 

```
test minimum case:

Number( 1 )
should be:
Number( 2 )
  at: (where you rock and roll)

1 assertions, 1 failures
```

The result format may be different between environments. 

## Batch testing

For generally using, you need run a ton of tests before deploying. 
Just add a index file to bunch up all your test cases: 

```javascript
import Robberfly from 'https://robberfly.fenz.land/Robberfly.js';

const tester= new Robberfly();

tester.addPath(
	'./cases_0.js',
	'./cases_1.js',
	// ...
);

tester.run();

```

### run serially

In this way, Robberfly assume your tests are independent with each other, and run them concurrently. 
If you need to run them serially, use: 

```javascript
tester.runSerially();
```

### run in standalone thread

Your code may do some global works. So you need isolate some of them into a standalone thread. Just use: 

```javascript
tester.runIso();

tester.runIsoSerially();
```

Farther, your can isolate each test into a standalone thread by: 

```javascript
tester.runIsoEach();
```

Then, the tests will run in a standalone Web Worker thread. 
Therefore, you should not test DOM and BOM dependent code in this way. 

### tips

The function test(), not run the test indeed. It only add the test to the container. 
When you run test cases without `new Robberfly()`, we actually run them automatically at the secondary macro task. 
So, we should add the tests before this. So you can add test synchronously or after promise, but not after timeout. 
If you really need do this, you can import Robberfly dynamically to delay the automatic running. 

```javascript
import { test, } from 'https://robberfly.fenz.land/Robberfly.js';

test( 'synchronously test', ()=> {
	// that's fine
}, );

await then();

test( 'micro task test', ()=> {
	// that's fine
}, );

await timeout();

test( 'macro task test', ()=> {
	// that's not fine
}, );

```

```javascript

await timeout();

const { test, }= await import ('https://robberfly.fenz.land/Robberfly.js');

test( 'macro task test', ()=> {
	// that's fine
}, );

```

## Available asserts

### assertTo

```javascript
assertTo( condition, );
```
Fail when `Boolean (condition)` is false. 

### assertNotTo

```javascript
assertNotTo( condition, );
```

Fail when `Boolean (condition)` is true. 

### assertBe

```javascript
assertBe( value, expect, );
```

Fail when `value` and `expect` are not one thing (be one thing: `[ value, ].includes( expect )`). 

### assertNotBe

```javascript
assertNotBe( value, expect, );
```

Fail when `value` and `expect` are one thing. 

### assertAs

```javascript
assertAs( value, expect, );
```

Fail when `value` not same as `expect` (same as: compare deeply for pure object, array, map or set). 

### assertNotAs

```javascript
assertNotAs( value, expect, );
```

Fail when `value` same as `expect`. 

### assertInstanceOf

```javascript
assertInstanceOf( value, expectClass, );
```

Fail when `value` is not instance of `expectClass`. 

### assertOwn

```javascript
assertOwn( value, expectProperty, );
```

Fail when `value` has no own property named `expectProperty`. 

### assertNotOwn

```javascript
assertNotOwn( value, expectProperty, );
```

Fail when `value` has own property named `expectProperty`. 

### assertFunction

```javascript
assertFunction( value, );
```

Fail when `value` is not a callable function (a class is not a callable). 

### assertClass

```javascript
assertClass( value, );
```

Fail when `value` is not a class. 

### assertAsync

```javascript
assertAsync( value, );
```

Fail when `value` is not a asynchronous function or class. 

### assertThrow

```javascript
assertThrow( expectError, callback, );
```

Run callback, and fail when `callback` not throws an error not equal `expectError`. 

### assertThrowInstanceOf

```javascript
assertThrowInstanceOf( expectErrorClass, callback, );
```

Run callback, and fail when `callback` not throws an error instance of `expectErrorClass`. 

### assertToThrow

```javascript
assertToThrow( callback, );
```

Run callback, and fail when `callback` not throws. 

### assertNotThrow

```javascript
assertNotThrow( callback, );
```

Run callback, and fail when `callback` throws. 

### assertRun()

##### basic

```javascript
const runner= assertRun();

runner.run();

runner.assert();
```
Fail when `runner.run()` not runs before `runner.assert()`. 

##### with times

```javascript
const runner= assertRun();

runner.run();

runner.assert( expectTimes, );
```
Fail when `runner.run()` runs times less or more then `expectTimes` before `runner.assert()`. 

##### with ordering

```javascript
const runner= assertRun();

runner.run( 0, );
runner.run( 1, );
runner.run( 2, );

runner.assert();
```
Fail when `runner.run()` not runs with `0, 1, 2, ...` order. 
