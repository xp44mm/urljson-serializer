const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'urljson-serializer.js',
        library: 'urljson-serializer',
        libraryTarget: 'umd',
        globalObject: 'this',
    },

   externals: {
      "rxjs": "rxjs",
      "rxjs/operators": "rxjs.operators",
   },

})
