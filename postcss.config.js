module.exports = {
	plugins: {
		autoprefixer: {},
		'postcss-preset-env': {}, // lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments.
		'postcss-px-to-viewport': { //将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
			unitToConvert: 'px',
			viewportWidth: 750,
			unitPrecision: 5,
			viewportUnit: 'vw',
			fontViewportUnit: 'vw',
			propList: ['*', '!font', '!font-size', '!line-height', '!letter-spacing'],
			selectorBlackList: [],
			minPixelValue: 1,
			replace: true,
			mediaQuery: false,
			exclude: /node_modules/i,
			include: undefined,
			landscape: false,
			landscapeUnit: 'vw',
			landscapeWidth: 568
		}
	},
}
