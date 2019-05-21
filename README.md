
### 编译成commonJs module
rollup src/main.js --file bundle.js --format cjs
```
'use strict';

var foo = 'hello world!';

function main () {
  console.log(foo);
  console.log(1);
}

module.exports = main;
```

### 对应浏览器
rollup src/main.js --file bundle.js --format iife --name my
```
var my = (function () {
  'use strict';

  var foo = 'hello world!';

  function main () {
    console.log(foo);
    console.log(1);
  }

  return main;

}());
```

### 使用rollup.config.js配置文件
rollup -c

### 指定其他配置文件执行
rollup --config rollup.config.dev.js

### 引用json文件
rollup-plugin-json

### iife和umd 要加 -n
```
// npm run build:umd
(global = global || self, global.result = factory());
```