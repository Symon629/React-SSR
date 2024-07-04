module.exports = {
      // Tell webpack to run babel on every file it runs through
      module:{
        rules:[
            {
                // tell webpack to apply babel on file that has .js extension 
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                // Exclude the node_modules 
                exclude: /node_modules/,
                options:{
                        presets: [
              'react',
              'stage-0',
              [
                'env',
                {
                  targets: { browsers: ['last 2 versions'] },
                },
              ],
            ],
                }
            
            }
        ]
    }
}