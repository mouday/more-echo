# webpack打包library发布到npm

项目结构

```bash
$ tree
.
├── package.json
├── src
│   └── index.js
└── webpack.config.js
```

入口文件 index.js

```js
// src/index.js
export function echo(message) {
  console.log(message);
}

```

依赖配置 package.json

```json
{
  "name": "more-echo",
  "version": "1.0.0",
  "description": "a demo for webpack package to npm",
  "main": "dist/more-echo.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [
    "demo"
  ],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.72.1",
    "webpack-cli": "^4.9.2"
  }
}
```

配置文件 webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'more-echo.js',
    library: {
      name: 'moreEcho',
      type: 'umd',
    },
  },
};

```
>参考 [https://webpack.docschina.org/guides/author-libraries/](https://webpack.docschina.org/guides/author-libraries/)

打包发布

```bash
# 打包
$ npm run build

# 发布
$ npm publish
```

npm地址：[https://www.npmjs.com/package/more-echo](https://www.npmjs.com/package/more-echo)


## Node环境中使用

```bash
npm i more-echo
```

示例

```js
const { echo } = require('more-echo');

echo('Hello World!');
```

## 浏览器中使用

```html
<script src="./dist/more-echo.js"></script>

<script>
    moreEcho.echo('Hello World');
</script>
```

github: [https://github.com/mouday/more-echo](https://github.com/mouday/more-echo)
