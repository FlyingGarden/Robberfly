
export default (
	globalThis['navigator']? 'browser':
	globalThis['Deno']? 'deno':
	undefined
);
