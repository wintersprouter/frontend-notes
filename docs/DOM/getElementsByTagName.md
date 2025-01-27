---
slug: getElementsByTagName
title: getElementsByTagName() 手寫實作
authors: [ashley]
tags: [getElementsByTagName, DOM, JavaScript, recursion]
keywords: ["getElementsByTagName", "DOM", "JavaScript", "recursion"]
---

# getElementsByTagName() 手寫實作

`getElementsByTagName()` 是一個 DOM API，可以用來取得指定標籤名稱的 DOM 元素，並且會回傳一個 HTMLCollection 物件。

這裡會在不使用 `document.querySelectorAll()`的情況下 手寫 `Element.getElementsByTagName()` 方法

## 輸入參數

- 一個 element 作為起始搜尋的根節點。
- 一個 tag 字串。

## 功能需求

- 搜尋 element 的所有後代（不包含自身）是否包含指定的 tag 名稱。
- 如果節點的 tag 包含了所有指定的 tag 名稱，就將其加入結果陣列中。
- 最終返回一個陣列（`Array<Element>`），而非類陣列（`HTMLCollection`）。

## 範例

```js
const doc = new DOMParser().parseFromString(
  `<div id="foo">
    <span>Span</span>
    <p>Paragraph</p>
    <div id="bar">Div</div>
  </div>`,
  "text/html",
);

getElementsByTagName(doc.body, "div");
// [div#foo, div#bar]
```

## 實作思路：

由於 DOM 是樹狀結構，透過 **遞迴** 進行可以方便地遍歷所有的子節點及其後代，並將符合條件的節點加入陣列中。

```ts
export default function getElementsByTagName(
  element: Element,
  tagNameParam: string,
): Array<Element> {
  //用於存放符合條件的後代元素
  const elements: Array<Element> = [];

  //將輸入的 tagNameParam 轉為大寫，因為 Element.tagName 返回的值是大寫（如 DIV）。
  const tagName = tagNameParam.toUpperCase();

  //使用遞迴的方式，逐一檢查 element 的所有後代節點。
  function traverse(el: Element) {
    if (el == null) {
      return;
    }
    //如果目前的節點標籤名稱符合目標，加入陣列
    if (el.tagName === tagName) {
      elements.push(el);
    }

    // 遍歷目前節點的所有子節點
    for (const child of el.children) {
      traverse(child);
    }
  }

  //搜尋後代節點（不包括起始節點），必須從 element.children 開始遍歷。
  //Element.children 會回傳即時子元素的 HTMLCollection
  for (const child of element.children) {
    traverse(child);
  }

  return elements;
}
```

## HTMLCollection

`HTMLCollection` 是一種 **動態更新** 的類陣列，當 DOM 結構發生變化時，`HTMLCollection` 的內容會即時反映這些變化。

為什麼不能用`.forEach()`遍歷? 因為 `HTMLCollection` 是一個類陣列，不是真正的陣列，因此不繼承 `Array.prototype` 上的方法（例如 `.forEach`, .`map`, .`filter` 等）。
