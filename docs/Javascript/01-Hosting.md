# 請說明什麼是 Hosting 提升?

Hosting 提升指的是在執行 JavaScript 程式碼之前， JavaScript 引擎會將變數和函式的宣告提升到作用域的頂端。

當瀏覽器運行 Javascript 引擎的時候也就是 runtime 時，會進入創造階段：

## 創造階段

首先進入創造階段，JavaScript 引擎會會將幫所有的變數和函式準備記憶體的空間，此時的變數與函式會提升。

### var 變數的提升

var 變數的宣告會被提升到作用域的的頂端，但賦值（值的初始化）不會被提升。因此，在提升後變數會被初始化為 undefined。

```js
var counts = 2;
```

當提升時可以理解成以下：

```js
var counts; //提升到函式作用域的的頂端，這時候的 counts 值是 undefined
counts = 2; //此時賦值 2
```

### const 變數和 let 變數的提升

let 和 const 宣告也會被提升，但與 var 不同的是，它們不會被初始化為 undefined，而是會進入「暫時死區」（TDZ, Temporal Dead Zone），直到程式執行到宣告它們的那一行為止。如果在此之前訪問它們，會拋出 ReferenceError。

```js
let counts = 3;
const times = 5;
```

當提升時可以理解成以下：

```js
counts; // ReferenceError 因為尚未被宣告
times; // ReferenceError 因為尚未被宣告
let counts = 3; //宣告並且賦值
const times = 5; //宣告並且賦值
```

### 函式陳述式提升

函式陳述式會包完整的函式被提升到作用域頂部，此時的函式是可以在宣告前被呼叫的。

```js
sayHi();

function sayHi() {
  console.log("Hi!");
}
```

當提升時可以理解成以下：

```js
function sayHi() {
  console.log("Hi!");
}

sayHi(); //此時呼叫會印出 "Hi!"
```

### 函式表達式提升

視同變數的提升，一樣會被提升到函式作用域的頂部。
函式表達式的變數宣告部分會被提升，但賦值為函式的部分不會。因此，提升後變數是 undefined，試圖呼叫它會導致錯誤。

```js
sayHi();

var sayHi = function () {
  console.log("Hi!");
};
```

當提升時可以理解成以下：

```js
var sayHi; //此時的值會是 undefined
sayHi(); //Uncaught TypeError: sayHi is not a function
sayHi = function () {
  console.log("Hi!");
};
```

## 執行階段

這時候會實際執行程式碼，並且將值賦予給變數。

---

## 實例練習

[45. Hoisting VI](https://bigfrontend.dev/quiz/Hoisting-VI)

```js
// This is a JavaScript Quiz from BFE.dev

var foo = 1;
(function () {
  console.log(foo);
  foo = 2;
  console.log(window.foo);
  console.log(foo);
  var foo = 3;
  console.log(foo);
  console.log(window.foo);
})();
```

## 解題

```js
// 創造階段： var foo 會被提升到作用域頂部，但尚未賦值
var foo;
foo = 1;
//
(function () {
  var foo; // 創造階段：在 IIFE（立即執行函數）內的 var foo 被提升到最頂端，但尚未賦值
  console.log(foo); //undefined
  foo = 2;
  console.log(window.foo); // window.foo 指的是全局變數 foo，它的值在最開始被賦值為 1，所以這裡會輸出 1
  console.log(foo); // 這裡的 foo 指的是函式內的變數，已經被賦值為 2，所以輸出 2
  foo = 3;
  console.log(foo); //3 // 這裡的 foo 指的是函式內的變數，已經被賦值為 3，所以輸出 3
  console.log(window.foo); //1 // window.foo 指的是全局變數 foo，它的值在最開始被賦值為 1，所以這裡會輸出 1
})();
```
