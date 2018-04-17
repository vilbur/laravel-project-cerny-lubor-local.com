let mix = require('laravel-mix');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js([
		'resources/assets/js/app.js',
	], 'public/js/app.js')
   .sass('resources/assets/sass/app.scss', 'public/css/app.css');



/* LiveReload */
mix.browserSync({
	host:	'cerny-lubor-local.com',
	proxy:	'cerny-lubor-local.com',
	files:[
		/*
			====== APP ======
		*/
		'app/**/*.php',
		'routes/**/*.php',
		/* views */
		'resources/views/**/*.php',
		/* ASSETS */
		'resources/assets/**/*.*',
		'resources/assets/**/**/*.*',
		'resources/assets/**/**/**/*.*',

		/*
			====== PACKAGES DEV ======
		*/
		/* publish - VIEWS */
		'packages/vilbur/**/publish/views/*.blade.php',
		/* ASSETS */
		'packages/vilbur/**/publish/resources/assets/**/*.*',
		'packages/vilbur/**/publish/resources/assets/**/**/*.*',
		'packages/vilbur/**/publish/resources/assets/**/**/**/*.*',
	]
});