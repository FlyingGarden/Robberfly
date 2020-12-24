
Error.stackTraceLimit= 0o100;

globalThis.z= ( x, ...a )=> (console.warn( x, ...a, new Error().stack.split( /(?=\n)/, )[2], ), x);
