const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const path = require( 'path' );
module.exports = ( env ) => {
	return [
		{
			...defaultConfig,
			module: {
				...defaultConfig.module,
				rules: [ ...defaultConfig.module.rules ],
			},
			mode: env.mode,
			devtool: 'source-map',
		},
		{
			entry: {
				'alerts-dlx-common': { import: './src/scss/common.scss' },
				'alerts-dlx-block-editor': './src/scss/block-editor.scss',
				'alerts-dlx-gfont-roboto': { import: './src/scss/fonts/roboto.scss' },
				'alerts-dlx-gfont-lato': { import: './src/scss/fonts/lato.scss' },
				'alerts-dlx-bootstrap-dark': './src/scss/bootstrap/dark.scss',
				'alerts-dlx-bootstrap-light': './src/scss/bootstrap/light.scss',
				'alerts-dlx-chakra-dark': './src/scss/chakra/dark.scss',
				'alerts-dlx-chakra-light': './src/scss/chakra/light.scss',
				'alerts-dlx-material-dark': './src/scss/material/dark.scss',
				'alerts-dlx-material-light': './src/scss/material/light.scss',
				'alerts-dlx-shoelace-dark': './src/scss/shoelace/dark.scss',
				'alerts-dlx-shoelace-light': './src/scss/shoelace/light.scss',
			},
			resolve: {
				alias: {
					react: path.resolve( 'node_modules/react' ),
				},
			},
			mode: env.mode,
			devtool: 'source-map',
			output: {
				filename: '[name].js',
				sourceMapFilename: '[file].map[query]',
				assetModuleFilename: 'fonts/[name][ext]',
				clean: true,
			},
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /(node_modules|bower_components)/,
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env', '@babel/preset-react' ],
							plugins: [
								'@babel/plugin-proposal-class-properties',
								'@babel/plugin-transform-arrow-functions',
							],
						},
					},
					{
						test: /\.scss$/,
						exclude: /(node_modules|bower_components)/,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
							},
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
								},
							},
							{
								loader: 'resolve-url-loader',
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true,
								},
							},
						],
					},
					{
						test: /\.css$/,
						use: [
							{
								loader: MiniCssExtractPlugin.loader,
							},
							{
								loader: 'css-loader',
								options: {
									sourceMap: true,
								},
							},
							'sass-loader',
						],
					},
					{
						test: /\.(woff2?|ttf|otf|eot|svg)$/,
						include: [ path.resolve( __dirname, 'fonts' ) ],
						exclude: /(node_modules|bower_components)/,
						type: 'asset/resource',
					},
				],
			},
			plugins: [ new RemoveEmptyScriptsPlugin(), new MiniCssExtractPlugin() ],
		},
	];
};
