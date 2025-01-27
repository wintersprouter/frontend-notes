---
slug: getElementsByClassName
title: getElementsByClassName() 手寫實作
authors: [ashley]
tags: [getElementsByClassName, DOM, JavaScript, recursion]
keywords: ["getElementsByClassName", "DOM", "JavaScript", "recursion"]
---

# getElementsByClassName() 手寫實作

`getElementsByClassName()` 是一個 DOM API，可以用來取得指定 class 名稱的 DOM 元素，並且會回傳一個 HTMLCollection 物件。

## 輸入參數

- 一個 element 作為起始搜尋的根節點。
- 一個 classNames 字串，包含要搜尋的 class 名稱，可以是單個或多個，用空白分隔。

## 功能需求

- 搜尋 element 的所有後代（不包含自身）是否包含指定的 class 名稱。
- 如果節點的 classList 包含了所有指定的 class 名稱，就將其加入結果陣列中。
- 最終返回一個陣列（`Array<Element>`），而非類陣列（`HTMLCollection`）。
- 不使用 `document.querySelectorAll()`

## 範例

```js
const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
  </div>`,
  "text/html",
);

getElementsByClassName(doc.body, "foo bar");
// [div.foo.bar.baz, div.foo.bar]
```

## 實作思路

由於 DOM 是樹狀結構，透過 **遞迴** 進行可以方便地遍歷所有的子節點及其後代，並將符合條件的節點加入陣列中。

搜尋的 className 字串可能包含多個 class 名稱，因此需要將其拆分為多個 class 名稱，並逐一檢查是否為目標節點的子集合。

```ts
//透過 Array.from(a) 將 Set 轉為陣列，並用 every 方法逐一檢查 classList.contains(value) 是否為 true ，就可以確認是否為要找尋的目標 class name。
function isSubset(a: Set<string>, b: DOMTokenList) {
  return Array.from(a).every((value) => b.contains(value));
}

export default function getElementsByClassName(
  element: Element,
  //一個 classNames 字串，包含要搜尋的 class 名稱，可以是單個或多個，用空白分隔。
  classNames: string,
): Array<Element> {
  const elements: Array<Element> = [];
  //首先將輸入的 classNames 字串轉換為一個 Set，便於進行比對。
  //使用 trim() 移除多餘的空白，並用正規表達式 /\s+/ 拆分字串為多個 class 名稱。
  const classNamesSet = new Set(classNames.trim().split(/\s+/));

  function traverse(el: Element) {
    if (el == null) {
      return;
    }
    //此函式檢查 classNamesSet 是否為目標節點 classList 的子集合。
    if (isSubset(classNamesSet, el.classList)) {
      elements.push(el);
    }

    for (const child of el.children) {
      traverse(child);
    }
  }

  for (const child of element.children) {
    traverse(child);
  }

  return elements;
}
```
