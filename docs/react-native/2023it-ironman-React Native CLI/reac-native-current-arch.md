---
## sidebar_position: 1

### 解析 React Native 現行架構（Current Architecture）原理
---

# 解析 React Native 現行架構（Current Architecture）原理

長久以來，React Native 的效能問題一直為人詬病，為了解決這個問題，React Native 開發團隊針對舊有的架構進行了重構，並在 0.68 版本推出了新架構（New Architecture）。接下來，我會分享原來的架構是 Javascript 如何與 natvie 溝通，究竟面臨了什麼問題？讓 React Native 開發團隊決定重構。

要來了解現行架構是怎麼運作，先來認識幾個重要的概念：

## Keywords

### Javascript Engine

就是指執行 Javascript 程式碼的環境。

- [Hermes](https://reactnative.dev/docs/hermes):
  是基於 React Native 打造的 JS Engine，在 React Native 0.70 版時被設為預設的 JS Engine。

- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore):
  Apple 開發的 JS Engine，較舊版本的 React Native 會使用這個引擎。

### JSON 序列化（serizlized）

就是把資料轉換成 JSON 格式的過程，反之， JSON 反序列化就是把 JSON 格式轉成原始資料的過程。

### Yoga engine

是一種跨平台佈局引擎（Layout engine），主要是用來計算使用者畫面中 UI 元素的位置，藉此生成每一個 React shadow node 的位置與大小，ex:把 Flexbox 佈局轉換成原生平台的佈局樣式。

# React Native 利用三個主要執行緒（threads）進行運作

- UI Thread/ Native Thread：
  是 UI Manager 負責處理用戶的介面操作 Andriod 跟 iOS 畫面的渲染邏輯，以及呼叫原生 api、運行原生模組。
- JavaScript Thread:
  主要是 JS Engine 使用，負責運行 JS Bundle 中的 JavaScript 程式碼，處理邏輯。
- Shadow thread:
  負責原生的佈局，提供給 yoga 引擎使用，其負責在渲染主機畫面（host screen）前計算佈局中元素的位子與大小。

# 現行架構（Current Architecture）

![https://ithelp.ithome.com.tw/upload/images/20230924/20162496DhGCCLaxPg.png](https://ithelp.ithome.com.tw/upload/images/20230924/20162496DhGCCLaxPg.png)

## 現行架構運作的流程

react 經過 Metro 打包編譯後產生 JS Bundle，JS Bundle 在 JavaScriptcore （JavaScript 引擎）的環境下執行，JavaScript 的程式碼與原生的程式碼透過 **橋接（Bridge）** 的方式溝通。

橋接（Bridge）是如何進行溝通呢？ 原生模組（Native module） 透過 Bridge 封裝成 JavaScript 接口提供給 JavaScript 引擎呼叫 Native 的方法。

Native 與 JavaScript 之間溝通的方法是使用非同步的 JSON 序列化與反序列化方式去傳遞與轉換資料，也就是 JS thread 會傳送以 JSON 序列化的訊息並且以字串符發送到 Bridge，Bridge 會優化這個訊息並且傳遞到 UI Thread/ Native Thread，UI Thread/ Native Thread 收後解密這條訊息，然後根據這條訊息去執行原生的程式碼。

當應用程式啟動時，UI Manager 會下載所有的原生模組，React 會在 JavaScript Thread 執行產生 React Element Tree ，一旦渲染時就會透過 Bridge 發佈變更的指令到 Shadow Thread，創造 React Shadow Tree （似 React Virtual DOM 功能），顯示應用程序的 UI 的佈局和結構來比對 UI 需進行哪些更改，然後透過 yoga 引擎去計算 UI 元素在原生螢幕的位置和大小，一旦 Yoga 完成布局計算，React Native 的 UI Manager 就會將使用原生平台特定的 API 轉換成原生的 Host View Tree 並且通知 UI Thread 使用原生元素在用戶的螢幕上呈現變更後的 UI。

## 現行架構使用橋接（Bridge）存在的一些問題

- 操作是非同步(asynchronous)的：
  原生或 JavaScript 其中一端傳遞消息到 Bridge ，需要等另外一端處理這些消息，即使這個等待很沒必要。Bridge 就像是一條單線道的橋，當兩端都有車想要通過時，必須先等待其中一端過橋，另一端的車子才能過橋，曠時費力。

- 只能在單一執行緒(single-threaded)上進行：
  JavaScript 只能在單一的 thread 上運行，所以會導致某些計算必須等待這個 thread 完成。

- 序列化造成效能消耗大:
  由於透過 JSON 格式傳遞消息，每一次都經過序列化跟反序列化，造成效能的開銷很大。

以上的原因導致效能不佳，也連帶了影響使用者體驗。舉例來說，有一個很長的列表，當使用者在使用手勢快速向下滑動的時候，就很可能在剩下的資料回傳之前看到螢幕出現白屏。造成白屏的原因就在於：

1. 原生的 onScroll 事件傳遞到 JavaScript Thread
2. JavaScript 去呼叫 api 取得新的資料
3. JavaScript 取得資料後把新的佈局細節傳給 shadow tree
4. shadow tree 透過 Yoga engine 計算好佈局的細節後，傳送到原生的 UI

當使用者操作速度一快，Bridge 就塞車了～畫面也就因此卡住了。

#### 參考資料

- [React Native 原理与实践](https://juejin.cn/post/6916452544956858382#heading-18)
- [React Native: Understanding Threads.](https://brooklinmyers.medium.com/react-native-understanding-threads-e026c7d62bb2)
- [React Native’s bridge, under the hood](https://medium.com/@samwhadams/react-native-under-the-hood-80677cf9bf96)
- [React Native 渲染原理](https://zhuanlan.zhihu.com/p/388681402)
- [Does React Native have a 'Virtual DOM'?](https://stackoverflow.com/questions/41804855/does-react-native-have-a-virtual-dom)

:::note

本篇文章原先發佈於[ithome](https://ithelp.ithome.com.tw/articles/10326761)
