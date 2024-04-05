---
## sidebar_position: 2

### 解析 React Native 新架構（New Architecture） 原理
---

# 解析 React Native 新架構（New Architecture） 原理

在 [DAY20 解析 React Native 現行架構（Current Architecture）原理](https://ithelp.ithome.com.tw/articles/10326761) 理解了現行架構使用橋接（bridge）溝通的缺點後，接著就要了解現行架構 React Native 開發團隊如何改進？在新的架構中又如何加強與原生模組的通訊？

同樣的，幾個新架構的重要關鍵字必須先瞭解一下：

## Keywords

### codeGen

一個靜態類型的檢查器，會在**應用程式建構** (App build time) 的時候，將靜態類型的 Javascript 程式碼（Typescript、Flow）翻譯成 Fabric 和 Turbo Modules 使用的原生程式碼 和 JSI 需要的 C++。
使用 codeGen 可以減少開發維護原生模組或程式碼的成本，只要提供 typed JavaScript 即可產生原生的程式碼了。

### JSI （JavaScript Interface）

一個輕量的 API，可以用於任何 JavaScript virtual machine，讓不同的平台可以用不同的 JavaScript 引擎。
JSI 是用 C++ 寫的，它將 JavaScript 引擎嵌入 C++ 應用程式中。

透過 JSI 可以直接讓 JavaScript 程式碼調用原生程式碼的函數，獲取原生對象的引用，然後同步地使用這些引用來訪問原生功能，不需要使用 JSON 序列化轉換資料的過程，就可以提升溝通效率。

例如，想要打開手機的相機，就可以透過 JavaScript 去調用原生拍照的 Api ，打開相機的這項任務就會在原生程式碼中執行。

### Fabric

Fabric 是新的 UI 渲染系統，旨在提升框架與主機平台（host platforms：原生端的平台）互用性、加強 JavaScript 與原生線程的溝通。

Fabric 向 JavaScript 提供了本身的函式，使用 JSI 讓 Hermes 跟原生端（C++ core）透過 ref functions 直接溝通。

Fabric 可以直接在 C++ 中創建 Shadow Tree，以減少渲染特定元素的步驟。

### Turbo Modules

就是加強版的原生模組系統（Native modules）。

### Hermes

針對 Android 運行 React Native 優化的 JavaScript 引擎。從版本 0.69 起 Hermes 便被設為預設的 JavaScript 引擎。

# 新架構（New Architecture）

![https://ithelp.ithome.com.tw/upload/images/20230924/20162496oJzBAEMebk.png](https://ithelp.ithome.com.tw/upload/images/20230924/20162496oJzBAEMebk.png)
以下透過從應用程式的建構到啟動說明新架構運作的流程。

一. 應用程式建構階段 App Build time：
當開發人員將 React Native 打包為 APK 檔案或 IPA 檔案時，透過 build 指令將 JavaScript 編譯成 bytecode，同時透過 Codegen 將 Javascript 程式碼轉換成 c++。

二. 應用程式運行階段 App Run time：
當使用者打開應用程式時

1. 應用程式會讀取 bytecode 檔案，並透過 Hermes JavaScript 引擎執行。
2. JavaScript 直接透過 JSI 跟原生模組溝通。
3. Turbo Module 直接透過 JSI 與 JavaScript 溝通。
4. JavaScript 中的 React 元件將會透過 Fabric 去渲染原生 UI 畫面，同時 Fabric 也是使用 JSI 跟原生模組、JavaScript 溝通。
5. Fabric 會使用 Yoga 引擎去計算使用者介面的佈局。
6. Fabric 使用 Fabric Renderer 在使用者螢幕上繪製用戶介面元素，並且調用原生圖形 API 去處理手勢、動畫..等功能。

## 新架構的改變

- JSI 取代了原來的 Bridge
- Fabric 取代了原來的 UI manerger
- Turbo Modules 取代了原來的 Native modules
- JavaScript 引擎不再侷限於 JavaScriptCore

## 新架構帶來的效益

### JSI

- 使用 JSI 接口讓 native code 可以更有效率地與 Javascript 通訊。

### Fabric

- 使 React Native 應用程式更好地與原生應用程式的視圖之間交互運作，這意味著 React Native 可以更輕鬆地嵌入並與原生視圖（host views）進行互動，使應用程式在不同平台上更具靈活性和一致性。
- 透過整合 React Suspense 可以更有效地取得資料。

### Turbo Modules

- 使用強型別的接口在不同平台可以保持一致性。
- 舊架構中，在應用程式啟動時就要載入全部的原生模組，但是 Turbo Modules 可以啟用模組 Lazy loading ，根據需求下載需要的原生模組，讓應用程式啟動的速度更快。

### Hermes

- 更快的 TTI（time to interactive）：TTI 就是只當點下應用程式圖示到第一個畫面 (screen) 渲染完成的時間。根據 Meta 的研究，iOS 花費的時間下降了 63%、Android 下降 51%。打開應用程式的速度變快了。
- 更小的應用程式 bundle。
- 記憶體耗用量(Memory consumption) 減少。
- 促進 JavaScript 跟原生溝通的效率。

# 小結

- 靜態型別的檢查提升了 JavaScript 與原生的相容性。
- 新架構藉由響應式與流暢的介面提升了使用者體驗。
- 新架構更好的 debug 。
- 新架構讓手機應用程式啟動變快。
- 新架構可以同步地處理需要立即執行的任務，而不受非同步的不確定性影響。

目前 React Native 雖然有加入新架構，但是必須再另外設定才能啟用，換句話說就是目前版本還是以現行的架構運行，但可以從 React Native 在 0.68 引入新架構，再到 React Native 0.71 預設使用 TypeScript ，不難發現 React Native 開發團隊正慢慢的把整體專案往符合新架構的方向去調整。或許，預設使用新架構的版本指日可待（？

#### 參考資料

- [React Native 新架构分析](https://juejin.cn/post/6893032764124168206#heading-2)
- [Deep dive into React Native’s New Architecture](https://medium.com/coox-tech/deep-dive-into-react-natives-new-architecture-fb67ae615ccd)
- [ADDING REACT NATIVE TO A COMPLEX APP — PART 2: UNDER THE HOOD](https://www.nearform.com/blog/adding-react-native-to-a-complex-app-part-2-under-the-hood/)
- [React Native New Architecture in depth (Hermes, JSI, Fabric, Yoga, Turbo Module, Codegen)](https://medium.com/@anisurrahmanbup/react-native-new-architecture-in-depth-hermes-jsi-fabric-fabric-renderer-yoga-turbo-module-1284a192a82b#1f8e)
- [Why a New Architecture](https://reactnative.dev/docs/the-new-architecture/why)
- [React Native New Architecture](https://medium.com/@mishraabhishek.11/react-native-new-architecture-937c76547b29)
- [React Native Architecture: A Conceptual Overview](https://medium.com/@kdsinghak47/react-native-architecture-a-conceptual-overview-7e2794400de)

:::note

本篇文章原先發佈於[ithome](https://ithelp.ithome.com.tw/articles/10326854)
