const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass({
  webpack(config, { dev }) {
      const entry_func= function() {
         return config.entry().then((entry) => {
            return Object.assign({}, entry, { 
            })
         })
      }

      const publicPath = dev ? '/_next/static/images' : '/demo/_next/static/images'
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
            test: /\.(css)$/, 
            use: [
               {
                  loader: 'isomorphic-style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                    minimize: true || {/* CSSNano Options */}
                  }
               }
            ]
         },
         
         {
           test: /\.(jpe?g|png|gif|svg)$/i,
           use: [
             {
               loader: "file-loader",
               options:{
                publicPath: publicPath,
                outputPath: 'static/images'
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
                 name: "fonts/[name].[ext]"
               }
             }
           ]
         }
      ];

      const more_plugins = [
         //new ExtractTextPlugin('style.css')
      ]

   
      return {
        ...config, 
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
  },
  distDir: 'build',
  generateBuildId: async () => {
    // In order to 
    return 'v1'
  }
})
