---
## sidebar_position: 1

### DOM 與 Virtual DOM
---

## DOM

DOM (Document Object Model) 是一個網頁樹狀資料結構的物件，用來呈現瀏覽器中的畫面結構。當頁面產生變化時，便是透過操作 DOM 後藉由瀏覽器的渲染引擎重繪來呈現畫面，一旦對 DOM 進行操作，渲染引擎就會自動地將整個畫面重繪。

## 操作 DOM 對效能的影響

操作 DOM 本身是一個昂貴的效能負擔，如果在短時間內頻繁或大量的更新 DOM 元素，可能會造成畫面卡頓，因為瀏覽器的渲染引擎也會跟著不斷重繪畫面。因此，在前端的針對 DOM 的效能優化就是盡量縮小操作 DOM 的範圍。

## Virtual DOM

因此為了縮小操作 DOM 的範圍 Virtual DOM 的概念就產生了，簡單來說，Virtual DOM 就是一個虛擬的畫面結構，同時也是描述真實的 DOM 結構。他本身就是由一個個的 Dom 元素是 Javascript 物件，進而組成的樹狀結構。

與 DOM 的關係，可以比喻成 Virtual DOM 是 DOM 的試做品，在更新 DOM 之前，先產生開發者期望中虛擬的畫面結構，然後再用這個虛擬的畫面結構去實際操作 DOM 。

## Virtual DOM 對於效能的優化

當瀏覽器第一次繪製畫面時會產生實際的 DOM 結構，同時也會產生一個 Virtual DOM 的結構，因此當我們要再更新畫面會是這樣的：

1. 根據資料產生一組新的 Virtual DOM 結構
2. 將新的 Virtual DOM 結構與舊的 Virtual DOM 結構做比較
3. 新舊之間差異的部分更新在真實的 DOM 上
4. 瀏覽器的渲染引擎會自動重繪畫面
5. 若新舊的 Virtual DOM 結構一樣，則不會重繪畫面

這樣的做的好處可以，縮小操作 DOM 的範圍，只需要操作真正需要更新的 DOM 元素，可以大大的降低效能的負擔，另外，使用 Virtual DOM 的另一個好處是，Virtual DOM 並不會向真實的 DOM 與瀏覽器的渲染引擎做綁定，產生的 JavaScript 物件較為單純，也因此節省了效能。
