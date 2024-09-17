# 請說明 JavaScript 中 `let`, `var` , `const` 的差異為何?

使用 `let`、`var` 和 `const` 宣告變數時分別在：作用域、初始化、重複宣告、重新賦值、提升時有不同的行為。

## 作用域 scope

`var` 的作用域是全域或是在 function 中，`var` 宣告的變數會被提升到整個函式的頂端;

`let` 跟 `const` 則是區塊(block)作用域，這裡的 block 指的是 function 中或 if-else block 或 for-loop block，`let` 跟 `const` 只在它們所在的區塊內有效，使它們更具預測性，減少變數意外被覆蓋的可能性。

## 初始化 Initialization

初始化就是指變數第一次的賦值。使用 `var` 跟 `let` 宣告的變數初始化可以不需要賦值;

使用 `const` 初始化則需要必須賦值，否則會拋出: SyntaxError: Missing initializer in const declaration 的錯誤。

```js
var a;
let b;
const c; // SyntaxError: Missing initializer in const declaration
```

## 重複宣告

`var` 可以重複宣告，`var` 重複宣告時會覆蓋前面的變數; `let` 跟 `const` 則不可以。

## 重新賦值

`var` 跟 `let` 可以重新賦值; `const` 則不行，`const` 代表的是參考 (reference) 的不可變性 (immutable)，當物件和陣列被指派給 `const` 時，參考的是其記憶體的位置，物件和陣列的內容屬性是可以修改的，但不能重新指派為新的物件或陣列。

```js
var a = 1;
a = 2;

let b = 3;
b = 4;

const c = 5;
c = 6; //error 因為 'c' 為常數，所以無法指派至 'c'。

const person = {
    id:1 ;
    name:'Ashley';
}
person.id = 2; //可以修改 person 的 id ，因為仍是參考同一個記憶體位置。
console.log(person.id); // 2

person  = {
    id:5 ;
    name:'Andy';
}; // TypeError: Assignment to constant variable. 這時試圖指派一個全新的物件給 person（也就代表參考的記憶位置改變了），因參考不可變性所以報錯。
```

## 提升

`var` 宣告的變數會自動初始化，初始值為 `undefined`;
`let` 跟 `const` 宣告的變數會進到暫時死區 （TDZ, Temporal Dead Zone），直到執行到宣告的那一行。

---

## 實例練習

[100. `var` vs `let`](https://bigfrontend.dev/quiz/var-vs-let)

```js
var a = "BFE";
let b = "bigfrontend";
console.log(this.a);
console.log(this.b);
```

## 解題

```js
var a = "BFE";
let b = "bigfrontend";
console.log(this.a); //"BFE"
console.log(this.b); //undefined
```

因為 `var` 的作用域是全域，`var` 的變數會被加到全域物件，在瀏覽器中是 `window` 物件，`this` 通常指向全域物件，因此 `this.a` 等同於 `window.a` 也就是"BFE"。

`let` 則是區塊的作用域，`let` 的變數無法被加到全域物件，因此 `this.b` 是 `undefined`。
