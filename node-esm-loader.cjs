const { URL, pathToFileURL, }= require( 'url', );

const baseURL = pathToFileURL(process.cwd()).href;

exports.resolve= async function( specifier, parentModuleURL=baseURL, defaultResolver, ){
	return false;
	return {
		url: new URL(specifier, parentModuleURL).href,
		format: 'module'
	};
	// return '';
};
