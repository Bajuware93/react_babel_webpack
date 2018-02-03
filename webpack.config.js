module.exports = {
	entry: __dirname + '/index.js',
	module:{
		loaders:[{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query:
			{
				presets:['react']	
			}
			}]
	},
	output: {
		filename: 'transformed.js',
	path: __dirname + '/build'
	}
};
