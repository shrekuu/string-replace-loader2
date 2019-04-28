# string-replace-loader2

A webpack loader to replace a string or pattern

### Installation

```shell
npm install string-replace-loader2
```

### How to Use

```js
// webpack.config.js
...
module: {
  rules: [
    {
        test: /\.js$/,
        loader: 'string-replace-loader2',
        options: {
          find: /some_pattern/g,
          replace: function(match) {
            return 'something else'
          }
        }
      },
  ]
}
```