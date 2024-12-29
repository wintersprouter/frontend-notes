---
slug: this
title: this 如何在 JavaScript 中運作？
authors: [ashley]
tags: [2024iT鐵人賽, this, JavaScript]
keywords: ["2024iT鐵人賽", "this", "JavaScript"]
---

# this 如何在 JavaScript 中運作？

在 JavaScript 中`this`的指向會根據不同呼叫的方式而有不同的結果，以下分別列出幾種`this`的運作方式：

## 全域環境

在全域的環境下：

- 瀏覽器中：`this`指向的是`window`物件
- Node.js: `this`指向一個空的模組作用域內的物件

```js
console.log(this === window); //true
```

## 直接呼叫函式

當直接呼叫函式，在函式中的`this`均指向的是`window`物件。

```js
function hiThis() {
  console.log(this === window); // true (在瀏覽器中，非嚴格模式)
}

hiThis();

("use strict");
function hiStrict() {
  console.log(this === undefined); // true (嚴格模式)
}

hiStrict();
```

## new 運算子

使用`new`運算子會建立一個新的物件實例，此時的`this`的指向為該物件。

```js
function Person(name) {
  this.name = name;
}

const person = new Person("Ashley");
console.log(person.name); // "Ashley"
```

## 物件的方法

當呼叫物件中的方法時，此時的`this`指向的是呼叫該方法的物件。

```js
const person = {
  name: "Ashley",
  sayHi: function () {
    console.log(`Hi!${this.name}.`); //Hi!Ashley.
  },
};

person.sayHi();
```

在這個例子中，`this`指向的是 person

## class constructor

在 class 中 `this` 是自動綁定到 `class` 的實例，在 class 函式建構子中使用`this`呼叫函式，這裡的`this`指向的是 class 的實例。

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  getPersonName() {
    console.log(this);
  }
}

const person = new Person("Ashley");
console.log(person.getPersonName()); //Person{name:'Ashley'}
```

`this` 指向 class 的物件實例，也就是 Person 的實例。

## 箭頭函式

箭頭函式沒有自己的`this`，是繼承外層作用域的 `this`，因此即使在物件內使用箭頭函式，`this` 也不會指向該物件，而是指向箭頭函式定義時的外層環境。

```js
const person = {
  name: "Ashley",
  sayHi: () => {
    console.log(`Hi!${this.name}`); //Hi!undefined
  },
};

person.sayHi();
```

因為箭頭函式中的 `this` 是從外層作用域繼承，而不是指向 `person`，因為箭頭函式中的 this 指向外層的`window`，所以此例中 `this.name` 是 `undefined`。

```js
const person = {
  name: "Ashley",
  sayHi: function () {
    const arrowFn = () => {
      console.log(`Hi!${this.name}`); //Hi!Ashley
    };
    arrowFn();
  },
};

person.sayHi();
```

在這個例子中，`arrowFn` 繼承了 `sayHi` 函式中的 `this`，因此指向 `person`。

## 使用 `.call()`、.`apply()`、`.bind()`

使用`.call`、`.apply`、`.bind.`可以傳入物件改變`this`的指向。

```js
function greet() {
  console.log(this.name);
}

const person = { name: "Ashley" };

greet.call(person); // Ashley
greet.apply(person); // Ashley

const boundGreet = greet.bind(person);
boundGreet(); // Ashley
```

`call()` 和 `apply()` 會立即執行函式，並將 `this` 設定為傳入的物件。
`bind()` 則會返回一個新的函式，並永久綁定 `this` 到傳入的物件。

---

## 實例練習 1

[41. `this` III](https://bigfrontend.dev/quiz/this-III)

```js
// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1;
  },
  e() {
    return (() => this.a + 1)();
  },
};
console.log(obj.b);
console.log(obj.c());
console.log(obj.d());
console.log(obj.e());
```

## 解題 1

```js
// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: this.a + 1,
  c: () => this.a + 1,
  d() {
    return this.a + 1;
  },
  e() {
    return (() => this.a + 1)();
  },
};
console.log(obj.b); //NaN; 因為這裡this指的是window物件，undefined + 1
console.log(obj.c()); //NaN; 因為這裡this指的是window物件，undefined + 1
console.log(obj.d()); //2;因為這裡this指的是obj,1+1
console.log(obj.e()); //2;因為匿名函式的this指向是上一層的作用域，上一層的指向是obj,1+1
```

## 實例練習 2

[19. `this`](https://bigfrontend.dev/quiz/this)

```js
// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a);
obj.b();
obj.b();
const b = obj.b;
b();
obj.b.apply({ a: 2 });
obj.c();
obj.d();
obj.d();
obj.d.apply({ a: 2 });
obj.e();
obj.e();
obj.e.call({ a: 2 });
obj.f()();
obj.f()();
obj.f().call({ a: 2 });
```

## 解題 2

```js
// This is a JavaScript Quiz from BFE.dev

const obj = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c() {
    console.log(this.a);
  },
  d: () => {
    console.log(this.a);
  },
  e: (function () {
    return () => {
      console.log(this.a);
    };
  })(),
  f: function () {
    return () => {
      console.log(this.a);
    };
  },
};

console.log(obj.a); //1
obj.b(); //1，this指向為obj
obj.b(); //1，this指向為obj
const b = obj.b;
b(); //undefined，b 被賦值給變數 b，這時 this 是 undefined
obj.b.apply({ a: 2 }); //2，因為使用apply指定this為{ a: 2 }
obj.c(); //1，this指向為obj
obj.d(); //undefined，因為是箭頭函式，綁到上一層的作用域也就是全域
obj.d(); //undefined
obj.d.apply({ a: 2 }); //undefined，因為是箭頭函式，參考上一層
obj.e(); //undefined，因為是箭頭函式，參考上一層
obj.e(); //undefined，因為是箭頭函式，參考上一層
obj.e.call({ a: 2 }); //undefined，箭頭函數的 this 不會被 call 改變
obj.f()(); //1，f 返回一個箭頭函數，this 綁定到 f 的 this，即 obj
obj.f()(); //1
obj.f().call({ a: 2 }); //1，箭頭函數的 this 不會被 call 改變
```
