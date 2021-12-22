export const head = {
	title: 'LMS System',
	meta: [
		{ charset: 'utf-8' },
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1',
		},
		{
			hid: 'description',
			name: 'description',
			content: 'Nuxt.js + Vuetify.js + Material Dashboard',
		},
	],
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: 'https://seeklogo.com/images/H/home-loan-logo-47AE303918-seeklogo.com.png',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
		},
	],
};
export const plugins = [
	'~/plugins/vuetify.js',
	'~/plugins/base.js',
	'~/plugins/chartist.js',
	'~/plugins/components.js',
	{ src: '~/plugins/ckeditor.js', mode: 'client' },
];
export const css = ['~/assets/less/main.less'];
export const loading = { color: '#3B8070' };
export const build = {
	extractCSS: true,
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.(css|vue)$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	extend(config, ctx) {
		// Run ESLint on save
		if (ctx.isDev && ctx.isClient) {
			config.module.rules.push({
				enforce: 'pre',
				test: /\.(js|vue)$/,
				loader: 'eslint-loader',
				exclude: /(node_modules)/,
			});
		}
		if (ctx.isClient) {
			config.devtool = 'source-map';
		}
	},
	transpile: [/^vuetify/],
};
export const buildModules = [
	// Doc: https://github.com/nuxt-community/eslint-module
	'@nuxtjs/eslint-module',
];
export const modules = ['@nuxtjs/axios'];
export const axios = {
	// proxyHeaders: false
};
