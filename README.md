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
