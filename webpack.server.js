const path = require("path");

const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");


// The below is not a requirement its just to reduce the bundle size 
// Webpack bundles for example express, react ,react-dom,
// That it copies the entire source code into
// With node we can require node modules at runtime 
// whenever our app first starts up 
const  webpackNodeExternal = require("webpack-node-externals");

const config  = {
    // inform webapck that we are building a bundler for nodejs rather than fro the browser
    // By telling the webpack that its going to be for a nodejs server than weback 
    target:'node',
    // Tell weboack the root file of our server application
    entry: './server/index.js',
    // Tell webpack the output file that is generated
    // _direname is the current directoru
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
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

    // We are basicalyy saying anything inside node_modules ignore 
    externals:[webpackNodeExternal()]

}

module.exports = merge(baseConfig,config);
