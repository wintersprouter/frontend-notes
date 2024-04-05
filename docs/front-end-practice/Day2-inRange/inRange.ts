// 🔸 **題目描述**

// 請實作一個函式 `inRange` 。此函式接受三個參數：

// - `value`：要檢查的數值
// - `start`：範圍的下限 (範圍包含 `start`)，預設為 0
// - `end`：範圍的上限 (範圍不包含 `end`)

// 在實作時，要同時考量以下條件：

// - 預設行為：如果僅提供兩個參數，則第二個參數被視為 `end`，而 `start` 此時預設為 0，這樣會讓使用該函式的人，在正數範圍內能更簡易地使用
// - 負數範圍：如果 `start` 大於 `end`，`inRange` 會交換參數以正確處理負數範圍，確保在正負數都能被處理
// - 輸出：`inRange` 函式輸出會是一個 `Boolean`

// ```jsx
// inRange(3, 2, 4)  // => true
// inRange(4, 8)     // => true
// inRange(4, 2)     // => false
// inRange(2, 2)     // => false
// inRange(1.2, 2)   // => true
// ```

// function inRange(value: number, start: number, end: number = 0): boolean {
//   if (start > end) {
//     if (value >= end && value < start) {
//       return true;
//     }
//   } else if (value >= start && value < end) {
//     return true;
//   }
//   return false;
// }

// function inRange(value: number, start: number = 0, end?: number): boolean {
//   // 如果只提供了兩個參數，則將第二個參數視為 `end`，並將 `start` 設為 0
//   if (end === undefined) {
//     end = start;
//     start = 0;
//   }

//   // 如果 `start` 大於 `end`，則交換 `start` 和 `end`
//   if (start > end) {
//     [start, end] = [end, start];
//   }

//   // 檢查 `value` 是否在範圍內
//   return value >= start && value < end;
// }

function inRange(value, start, end = 0) {
  return value >= Math.min(start, end) && value < Math.max(start, end);
}
export default inRange;
