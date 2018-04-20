//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  webpack(config, { dev }) {
      // modify it!
      //console.log(JSON.stringify(config.output, null, 3))

      
      const entry_func= function() {
         return config.entry().then((entry) => {
            return Object.assign({}, entry, { 
               //'style.css':'/Users/sffish/ssrtest/assets/styles/index.scss'
            })
         })
      }

      const more_rules = [
         {
          test: /\.md$/,
           use: [
             {
               loader: "raw-loader",
             }
           ]  
         },
         {
           test: /\.html$/,
           use: [
             {
               loader: "file-loader",
               query: {
                 name: "[path][name].[ext]"
               }
             }
           ]
         },
         {
            test: /\.(css|scss)$/, 
            use: [
               {
                  loader: 'isomorphic-style-loader'
               },
               // {
               //    loader: 'emit-file-loader',
               //    options: {
               //       name: 'dist/[path][name].[ext]'
               //    }
               // },
               {
                  loader: 'css-loader',
                  options: {
                    minimize: true || {/* CSSNano Options */}
                  }
               },
               {
                  loader: 'sass-loader'
               }
            ]
         },
         {
           test: /\.(jpe?g|png|gif|svg)$/i,
           use: [
             {
               loader: "file-loader",
               query: {
                 hash: "sha512",
                 digest: "hex",
                 name: "public/[path][hash].[ext]"
               }
             }
           ]
         },     
         {
           test: /\.(eot|ttf|woff|woff2)$/,
           use: [
             {
               loader: "file-loader",
               query: {
                 name: "public/fonts/[name].[ext]"
               }
             }
           ]
         }
      ];

      const more_plugins = [
         //new ExtractTextPlugin('style.css')
      ]

   
      return {...config, 
         entry:entry_func,
         module:{
            ...config.module,
            rules:[
               ...config.module.rules,
               ...more_rules
            ]
         },
         plugins:[
            ...config.plugins,
            ...more_plugins
         ]
      };
  }
}