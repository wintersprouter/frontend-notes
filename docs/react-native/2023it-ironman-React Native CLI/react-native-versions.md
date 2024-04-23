---
## sidebar_position: 3

### React Native 各版號的差異
---

## 留意專案目前使用的 React Native 版本

React Native 版本很重要，根據 React Native 的版本號不同，所支援的功能、環境、套件相容性、渲染系統都有所不同，會大大影響後續開發的難易度。所以應去了解手上的版本的內容去設定開發環境的配置。
我整理了以下各版本的更新摘要：

由新版本至舊版本（0.74 ~ 0.60）

- React Native 0.74（2024年4月）：

  - 推出 Yoga 3.0： 全新的 layout 引擎
    - 支援 `align-content: 'space-evenly'`
    - 支援 `position: 'static'`: 只有在新架構才支援這個屬性
  - 新架構：
    - [預設 Bridgeless 模式](https://github.com/reactwg/react-native-new-architecture/discussions/174)
    - onLayout callback 支援 batch update :
      本來在 onLayout callback 中的每更新一個狀態就會直接重新渲染，新版的 onLayout callback 採用 batch update 也就是將所有 onLayout callback 中的狀態都一次更新後再進行渲染提交，如此可以減少渲染的次數。
  - 新的專案預設使用 Yarn 3
  - Android 最小 SDK 版本提升至 23 (Android 6.0)
  - 刪除已經棄用的 `PropTypes`
  - 刪除已經棄用的 `PushNotificationIOS API`

- React Native 0.73（2023年12月）：

  - 提升 Debugging
    - 在 Hermes 在後台捕獲所有 `console.log()` 調用
  - Metro 更穩定的支援 Symlink
  - 支援 Android 14
  - Kotlin 現在是官方使用 React Native 構建的 Android 應用程式的推薦語言。
    - 快速遷移 Java 到 Kotlin：Android Studio `Code > Convert Java file to Kotlin File`
  - Android Gradle 外掛程式 (AGP) 版本從 7.4.x 更新至 8.1.x。
  - 建立 Android 應用程式必須使用 Java 17
  - Android 最小 SDK 版本提升至 21 (Android 5.0)
  - 新架構：
    - 新增 Bridgeless 模式
  - 棄用 Flipper 與 React Native 整合: 棄用 Flipper 作為React Native debug 工具
  - 棄用 `@types/react-native`
  - ios 應用程式最低支援版本 13.4

- React Native 0.72（2023年6月）：

  - Metro 支援 Symlink：主要用來建立 monorepo
  - 開發者體驗提升：
    - style 樣式錯誤不再以 Redbox 的形式顯示
    - Hermes 提供可讀性更好的錯誤訊息
    - 改進 React Native CLI 的錯誤輸出
    - Hermes 更快編譯與加速 JSON 解析
  - 重新命名 react-native/packages：需要修改路徑、升級到 0.72
  - 移除棄用的元件：Slider、DatePickerIOS、ProgressViewIOS

- React Native 0.71（2023年1月）：

  - 預設使用 TypeScript
  - 新增 Flexbox gap 屬性
  - 修復 PropTypes： 0.66 的時候把這個屬性棄用，在這個版本又加回來（？
  - 新增 React DevTools 網頁 debug 工具
  - 優化 Hermes 性能：提升 JSON.parse 效能 30%
  - 優化新架構（New Architecture）：減少 build 的時間、Android 刪除大量 C++ 程式碼
  - 刪除 AsyncStorage and MaskedViewIOS

- React Native 0.70（2022年9月）：

  - 預設使用 Hermes 引擎
  - Codegen 配置修改
  - React Native CLI 更新至 9.0
  - 更新 Android Gradle Plugin 至 7.2.1
  - 更新 Android Gradle version 至 7.5.1
  - 更新 Metro 至 0.72

- React Native 0.69（2022年6月）：

  - 預設使用 React 18
  - 内建 Hermes
  - 更新 Android Gradle Plugin 至 7.1.1
  - React Native CLI 更新至 8.0
  - Ruby 更新至 2.7.5

- React Native 0.68（2022年3月）：

  - 更新至 Node 16 LTS ，最低支援到 Node 14
  - 更新 Android Gradle Plugin 至 7.0.1
  - 更新 Metro 至 0.67
  - 更新 Kotlin 至 1.6.10
  - 更新 Android Gradle version 至 7.3
  - 更新 Android compile and target SDK 至 31
  - 使用新架構（New Architecture）：此版開始使用 Fabric 渲染器和TurboModule 系統。有關新架構做了什麼改變可以看這篇 [DAY 21 解析 React Native 新架構（New Architecture） 原理](https://ithelp.ithome.com.tw/articles/10326854)。
  - 強制使用 JSDK 11

- React Native 0.67（2022年1月）：

  - 更新 Android Gradle version 至 7.2
  - 更新 Android Kotlin version 至 1.5.31
  - 棄用 DatePickerAndroid

- React Native 0.66（2021年10月）：

  - 支援 Android 12 、 iOS 15
  - 支援 Android 12 新的藍牙權限
  - 提供 Apple Silicon (M1) Mac、 Xcode 13、 iOS 15 更好的支援
  - Hermes 0.9.0
  - 棄用 PropTypes

- React Native 0.65（2021年8月）：

  - Hermes 0.8 支援：Hermes iOS 此版開始支援 Apple M1 晶片
  - 修正與更新無障礙功能(Accessibility)
  - JCenter 停用：不再使用 JCenter 來分發原生模組。
  - 支援 Android Gradle Plugin 7

- React Native 0.64（2021年3月）：

  - ios 支援 [Hermes](https://hermesengine.dev/)：藉由降低內存利用率、減少下載大小等方法，使用 Hermes Javascript 引擎可提升 React Native 效能。
  - Metro 配置選項 Inline Requires：縮短啟用時間
  - Hermes 支援 Proxy
  - React 17
  - 棄用 Android API levels 16-20.
  - 最低版本 Xcode 12、 CocoaPods 1.10
  - Node.js 版本支援Node 10 - Node 12

- React Native 0.63（2020年7月）：

  - LogBox 功能：改進了錯誤和警告的顯示方式，提高了可讀性。
  - Pressable 元件
  - 停止支援 iOS 9 和 Node.js 8

- React Native 0.62（2020年3月）：

  - 將 Flipper 設為預設 debugg 的開發者工具
  - 新增 dark mode 功能： Appearance module、useColorScheme hook

- React Native 0.61（2019年9月）：

  - Fast Refresh 功能：提高了開發體驗。

- React Native 0.60（2019年7月）：
  - 導入自動連結（Auto Linking）：取代原本的 rnpm，安裝套件將自動連結原生模組，減少連結過程的複雜性。
  - AndroidX 支援：專案中有使用 Android 原生的程式碼或依賴的項目必須手動遷移。
  - 預設使用 CocoaPods: ios 專案管理套件的工具

如果你的接手專案低於 0.60 就要再好好考慮一下維護的成本，在升版本或維護的過程會比0.60 以上的版本難度更高，因為沒有 Auto Linking 你需要自己做好依賴與原生模組的連結。

從上面各版更新的內容，我們可以從版本迭代中發現更動的幅度很大，所以在接手專案時，應該根據版號去設置環境，甚至了解該版號支援哪些內容，才可以更快上手，避免在環境建置的時候踩坑。

## 根據版號內容去檢查目前專案的環境

### 幫你檢查目前專案建置情況

在終端機輸入：

```
npx @react-native-community/cli doctor
```

![https://ithelp.ithome.com.tw/upload/images/20230909/201624969pz9MA36hi.png](https://ithelp.ithome.com.tw/upload/images/20230909/201624969pz9MA36hi.png)
透過這個指令，它會幫你檢查環境是否相容，並且列出錯誤訊息，當下即可修正。但，即使修正了這些錯誤，你的專案還是開不起來？可能就需要檢查更細節的內容了。

### 取得目前專案的環境

在終端機輸入：

```
npx react-native info
```

會取得你目前的專案的環境，他會詳細地列出所有有關這個專案的環境：

```
info Fetching system and libraries information...
System:
  OS: macOS 13.5.1
  CPU: (10) arm64 Apple M2 Pro
  Memory: 614.67 MB / 32.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 16.19.1
    path: ~/.nvm/versions/node/v16.19.1/bin/node
  Yarn:
    version: 1.22.19
    path: /opt/homebrew/bin/yarn
  npm:
    version: 8.19.3
    path: ~/.nvm/versions/node/v16.19.1/bin/npm
  Watchman:
    version: 2023.07.24.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods:
    version: 1.12.1
    path: /Users/ashely/.rvm/gems/ruby-2.7.6/bin/pod
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 22.4
      - iOS 16.4
      - macOS 13.3
      - tvOS 16.4
      - watchOS 9.4
  Android SDK:
    API Levels:
      - "27"
      - "28"
      - "30"
      - "33"
      - "33"
      - "34"
    Build Tools:
      - 30.0.2
      - 30.0.3
      - 33.0.0
      - 33.0.1
      - 33.0.2
      - 34.0.0
    System Images:
      - android-21 | ARM 64 v8a
      - android-21 | Google APIs ARM 64 v8a
      - android-23 | ARM 64 v8a
      - android-24 | ARM 64 v8a
      - android-26 | ARM 64 v8a
      - android-28 | ARM 64 v8a
      - android-28 | Google ARM64-V8a Play ARM 64 v8a
      - android-29 | ARM 64 v8a
      - android-33 | Google APIs ARM 64 v8a
      - android-33 | Google APIs Intel x86_64 Atom
      - android-34 | Android TV ARM 64 v8a
      - android-34 | Android TV Intel x86 Atom
      - android-34 | Google TV ARM 64 v8a
      - android-34 | Google TV Intel x86 Atom
      - android-34 | Google APIs ARM 64 v8a
    Android NDK: Not Found
IDEs:
  Android Studio: Not Found
  Xcode:
    version: 14.3.1/14E300c
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 20.0.2
    path: /usr/bin/javac
  Ruby:
    version: 2.7.6
    path: /Users/ashely/.rvm/rubies/ruby-2.7.6/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.72.4
    wanted: 0.72.4
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: false
iOS:
  hermesEnabled: true
  newArchEnabled: false
```

根據筆者經驗，其中有幾個版號需要特別注意的，常常應用程式 build 失敗都跟這些版號設定有關：

- Node.js
- CocoaPods
- iOS SDK
- Android SDK
- Java
- Xcode

通常專案無法編譯，有可能是因為環境與當前 React Native 版本不相容，如果真的建置專案環境時遇到困難，使用 `npx react-native info` 把你的環境列出來會對於你在社群發問時有幫助的。

### 參考資料

[React Native 官方 blog](https://reactnative.dev/blog)
