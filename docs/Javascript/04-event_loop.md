---
slug: event-loop
title: Event loop 事件循環
authors: [ashley]
tags: [2024iT鐵人賽, event-loop, JavaScript]
keywords: ["2024iT鐵人賽", "event-loop", "JavaScript"]
---

# JavaScript 中的事件循環 event loop 是什麼?

JavaScript 是單執行緒的語言，所以一次只能執行一件事。事件循環 Event loop 是可以確保作為單行緒語言的 Javascript 可以在執行環境(瀏覽器或Node.js)中執行非同步 (asynchronous)程式碼而不會阻塞主執行緒的機制。

## 事件循環 event loop 進行的流程

1. Javascript 的主執行緒開始執行 scripts，並且將同步任務放入執行棧 （call stack），直到該任務完成後才會被移除。

   - 棧 stack : 是一種資料結構，特色是先進後出，當程式碼執行時函式會先被放入執行棧的最上方，當函式執行完成就會從最上方移除，接著執行執行棧最上方的函式，直到整個執行棧被清空。

2. 當執行時遇到非同步的任務時，例如：呼叫 api 或 `setTimeout()`，執行環境就會呼叫 Web API or Node.js API 讓其在背景運作。

3. 等待非同步的任務獲得結果後，將其 callback 放到任務隊列(task queues)中。

   - 隊列 queue: 是一種資料結構，特色是先進先出，可以想像是排隊的概念。

   - 任務隊列(task queues)又可以分成微任務和宏任務：

   - 微任務 Micro task queue：

     - Promise.then
     - Promise.catch
     - Promise.finally
     - process.nextTick（Node.js 環境）
     - MutationObserver（瀏覽器環境）
     - queueMicrotask()

   - 宏任務 Macro task queue

     - setTimeout()
     - HTTP 請求
     - UI handler:clicks, scrolls
     - setInterval()
     - script(整體程式碼)
     - UI 渲染
     - postMessage
     - MessageChannel

4. 當執行棧 （call stack）裡面所有的同步任務被執行完，就會去讀取任務隊列(task queues)，然後把任務隊列的第一個任務加到執行棧 （call stack）執行。

   **微任務優先於宏任務**

   - 會優先執行所有的微任務，當所有微任務執行完畢後，如果有新的微任務被添加到隊列中，則繼續依序執行新的微任務，直到微任務隊列清空。
   - 從宏任務隊列中取出一個任務執行，執行完，事件循環會去檢查微任務的隊列，如果有未執行的微任務就會先把微任務執行完畢。

這個過程會一直無限循環下去，Javascript 有效地去處理非同步與同步的運行，並且可以避免主執行緒阻塞。

＊ 文字較為抽象，這個影片的說明更有助於理解整個觀念：
[JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue](https://www.youtube.com/watch?v=eiC58R16hb8)

---

## 實例練習1

[1. Promise order](https://bigfrontend.dev/quiz/1-promise-order)

```js
// This is a JavaScript Quiz from BFE.dev

console.log(1);
const promise = new Promise((resolve) => {
  console.log(2);
  resolve();
  console.log(3);
});

console.log(4);

promise
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });

console.log(7);

setTimeout(() => {
  console.log(8);
}, 10);

setTimeout(() => {
  console.log(9);
}, 0);
```

---

## 解題1

1. 執行 `console.log(1)`，印出 `1`
2. 執行 `const promise = new Promise((resolve) => {...}`中的 `console.log(2)`，印出`2`，`console.log(3)`，印出`3`
3. `console.log(4)`，印出`4`
4. 將 `promise.then(() => {console.log(5)}).then(() => {console.log(6)})`的 callback 放到微任務隊列，
5. 執行 `console.log(7)`，印出`7`
6. 將 `setTimeout(() => {console.log(8)}, 10)`放到宏任務隊列，等待 10ms 後執行。
7. 將 `setTimeout(() => {console.log(9)}, 0)`放到宏任務隊列，但因為延遲是 0ms，所以這個宏任務會在所有同步代碼執行完後的下一次事件循環中優先執行。
8. 同步代碼全部執行完畢，檢查微任務隊列，發現有微任務
   - 將微任務隊列的`promise.then(() => {console.log(5)}).then(() => {console.log(6)})`放到 call stack 執行
   - 執行`console.log(5)`，印出`5`
   - 執行`console.log(6)`印出`6`
9. 檢查微任務隊列，發現沒有微任務，檢查宏任務隊列，發現有宏任務
   - 執行`setTimeout(() => {console.log(9)}, 0)`，印出`9`
   - 執行`setTimeout(() => {console.log(8)}, 10)`，印出`8`

## 實例練習2

[47. Promise Order II](https://bigfrontend.dev/quiz/promise-order-II)

```js
// This is a JavaScript Quiz from BFE.dev

console.log(1);

setTimeout(() => {
  console.log(2);
}, 10);

setTimeout(() => {
  console.log(3);
}, 0);

new Promise((_, reject) => {
  console.log(4);
  reject(5);
  console.log(6);
})
  .then(() => console.log(7))
  .catch(() => console.log(8))
  .then(() => console.log(9))
  .catch(() => console.log(10))
  .then(() => console.log(11))
  .then(console.log)
  .finally(() => console.log(12));

console.log(13);
```

## 解題2

1. 執行`console.log(1)`，印出`1`
2. 把 `setTimeout(() => { console.log(2); }, 10)`放到宏任務隊列，延遲 10ms 後執行。
3. 把 `setTimeout(() => { console.log(3); }, 0)`放到宏任務隊列中，延遲 0ms，會在事件循環的下一輪執行。
4. 執行`new Promise((_, reject) => {...})`

   - 執行`console.log(4)`，印出`4`
   - 執行 `reject(5)`，將 `.catch()` 的回調放入微任務隊列，但不會立即執行
   - 執行`console.log(6)`，印出`6`

5. 執行`console.log(13)`，印出`13`
6. 所有同步的程式碼都執行完了，檢查微任務隊列
   - `reject(5)`觸發`.catch(() => console.log(8))`，印出`8`，
   - 接著執行 `.then(() => console.log(9))`，印出`9`
   - 接著執行 `.then(() => console.log(11))`印出`11`
   - 接著執行 `.then(console.log)`，印出`undefined`
   - 接著執行 `.finally(() => console.log(12))`，印出`12`
7. 檢查微任務隊列，發現已清空，執行宏任務隊列
   - 執行 `setTimeout(() => {console.log(3);}, 0);`印出`3`
   - 執行 `setTimeout(() => {console.log(2);}, 10);`印出`2`

## 實例練習3

[103. Promise Order III](https://bigfrontend.dev/quiz/Promise-Order-III)

```js
const createPromise = () => Promise.resolve(1);

function func1() {
  createPromise().then(console.log);
  console.log(2);
}

async function func2() {
  await createPromise();
  console.log(3);
}

console.log(4);
func1();
func2();
```

## 解題3

1. 執行 `console.log(4)`，印出`4`
2. 執行 `func1()`

   - 執行`createPromise().then(console.log)`，這裡 `Promise.resolve(1)` 會立即 resolve，將 `console.log` 放到微任務列隊
   - 執行 `console.log(2)`，印出`2`

3. 執行 `async function func2()`

   - 執行`await createPromise()`，此時`createPromise()`會立即 resolve，並暫停 `func2` 的執行，await 將控制權交還給主執行緒，並將剩下的部分`console.log(3)`放入微任務隊列

4. 所有同步程式碼執行完畢，檢查微任務列隊
   - 執行`console.log`，又`console.log`為`Promise.resolve(1)`的callback，故會印出`1`
   - 執行`async function func2()`，執行`console.log(3)`，印出`3`
