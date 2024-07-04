const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config  = {
  
    // Tell weboack the root file of our client application
    entry: './client/app.js',
    // Tell webpack the output file that is generated
    // _direname is the current directoru
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },

     // Moved everything below to a common file webpack base since its both common in client and server

    //   // Tell webpack to run babel on every file it runs through
    //   module:{
    //     rules:[
    //         {
    //             // tell webpack to apply babel on file that has .js extension 
    //             test: /\.(js|jsx)?$/,
    //             loader: 'babel-loader',
    //             // Exclude the node_modules 
    //             exclude: /node_modules/,
    //             options:{
    //                     presets: [
    //           'react',
    //           'stage-0',
    //           [
    //             'env',
    //             {
    //               targets: { browsers: ['last 2 versions'] },
    //             },
    //           ],
    //         ],
    //             }
            
    //         }
    //     ]
    // }

  

}

module.exports = merge(baseConfig,config)

