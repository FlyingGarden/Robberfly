export { env as default, };

const env= (
	globalThis['navigator']? 'browser':
	globalThis['Deno']? 'deno':
	globalThis['process']? 'node':
	undefined
);
