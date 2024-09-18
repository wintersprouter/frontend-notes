# 請說明 JavaScript 中的事件委派 event delegation 是什麼?

## 事件委派 event delegation

事件委派 event delegation 是一種 JavaScript Pattern，在父層 DOM 元素上只要綁定一個監聽器，底下的子元素就看透過**事件冒泡（Event Bubbling）**機制觸發父層的監聽器，如此一來就不需要在每一個子元素上綁定個監聽器，只要在其共同的父元素上綁定一個即可。

優點:

- 節省記憶體：監聽器數量變少，也就可以提升效能。
- 提高程式碼維護性：處理事件的邏輯只需要在父元素的監聽器寫一次。
- 可以支援動態元素：可以動態的調整增加子元素，不需要額外的力氣處理綁定或移除子元素上的監聽器。

```html
<ul id="devices">
  <li>iPhone 16</li>
  <li>S24 Ultra</li>
  <li>Pixel 9 Pro XL</li>
</ul>

<script>
  const devices = document.getElementById("devices");

  devices.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log(event.target.innerText);
    }
  });
</script>
```

在這個例子中，`devices`作為父元素被綁定監聽器，將當點擊`<li>`，`<li>`就透過事件冒泡向上傳遞到`devices`，接著就可以透過`event.target`來檢查實際觸發事件的子元素是否符合條件，進而執行處理事件的邏輯。

## 實例練習

[117. event delegation](https://bigfrontend.dev/problem/event-delegation)

Can you create a function which works like jQuery.on(), that attaches event listeners to selected elements.

In jQuery, selector is used to target the elements, in this problem, it is changed to a predicate function.

```js
onClick(
  // root element
  document.body,
  // predicate
  (el) => el.tagName.toLowerCase() === "div",
  function (e) {
    console.log(this);
    // this logs all the `div` element
  },
);
```

event.stopPropagation() and event.stopImmediatePropagation() should also be supported.

you should only attach one real event listener to the root element.

## 解題

這題太難了，所以我看了別人的解答試圖去理解。

參考解答：[BFE.dev 117. event delegation | JSer - Front-End Interview questions](https://www.youtube.com/watch?v=TkBQYTi1jJU>)

```js
// Map<node, Array<[predicate, handler]>>
const allHandlers = new Map(); //用來儲存每個 root 元素及其對應的事件處理器。每個 root 都會對應一個 Array，其中存放了多組 [predicate, handler]
/**
 * @param {HTMLElement} root 根元素，事件監聽器將綁定在這個元素上
 * @param {(el: HTMLElement) => boolean} predicate 判斷函數，用於檢查事件目標是否符合條件
 * @param {(e: Event) => void} handler 事件處理函數，當事件目標符合條件時呼叫
 */
function onClick(root, predicate, handler) {
  if (allHandlers.has(root)) {
    //檢查 allHandlers 是否已經儲存了對應的 root 元素。如果已經有，則直接將新的 [predicate, handler] 對添加到該 root 元素的處理器列表中
    allHandlers.get(root).push([predicate, handler]);
    //將新的 [predicate, handler] 對添加到該 root 元素的處理器列表中
    return;
  }
  //如果沒有對應的 root 元素，則創建一個新的數組
  allHandlers.set(root, [[predicate, handler]]);
  // 然後在 root 上綁定一個 click 事件監聽器
  root.addEventListener(
    "click",
    function (e) {
      // 從事件目標元素 e.target 開始，一層層向上遍歷 DOM 結構，直到到達 root 元素或事件冒泡被停止
      let el = e.target;
      const handlers = allHandlers.get(root);
      let isPropagationStopped = false;
      e.stopPropagation = () => {
        //用來手動控制事件傳播，避免事件繼續冒泡到父元素
        isPropagationStopped = true;
      };
      //使用 while (el) 檢查事件目標及其父元素是否符合判斷函數的條件
      while (el) {
        let isImmediatePropagationStopped = false;
        e.stopImmediatePropagation = () => {
          //isImmediatePropagationStopped 停止傳播事件的同時也停止同一元素上後續的處理器執行
          isImmediatePropagationStopped = true;
          isPropagationStopped = true;
        };
        for (const [predicate, handler] of handlers) {
          //predicate(el)：用來判斷當前元素是否符合條件
          if (predicate(el)) {
            //執行對應的 handler 處理函式
            handler.call(el, e);
            // 檢查是否需要停止事件傳播
            if (isImmediatePropagationStopped) {
              break;
            }
          }
        }
        //如果 isPropagationStopped 設為 true，或者已經遍歷到 root 元素，則停止事件的繼續傳播
        if (el === root || isPropagationStopped) break;
        el = el.parentElement;
      }
    },
    false,
  );
}
```
