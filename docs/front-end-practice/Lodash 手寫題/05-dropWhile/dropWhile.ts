function dropWhile(array: any[], predicate: (value: any) => boolean): any[] {
  const dropIndex = array.findIndex((value) => !predicate(value));
  //findIndex() 方法返回符合條件的第一個元素的索引，如果沒有找到符合條件的元素，則返回 -1
  return dropIndex === -1 ? [] : array.slice(dropIndex);
  //slice 方法從該索引開始創建一個新的陣列
}

// function dropWhile(array, predicate) {
//   let index = 0;
//   //追蹤當前正在檢查的元素的索引

//   //這個 while 迴圈會持續執行，直到已經檢查了所有的元素或者找到了第一個不滿足條件的元素）
//   while (index < array.length && predicate(array[index], index, array)) {
//     index++;
//   }

//   return array.slice(index);
// }

// function dropWhile(array, predicate) {
//   //追蹤已經丟棄的元素的數量
//   let droppedCount = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (!predicate(array[i], i, array)) {
//       //一旦找到了第一個不滿足 predicate 函數的元素，迴圈就會停止，不會再檢查後面的元素
//       break;
//     }
//     droppedCount++;
//   }

//   return array.slice(droppedCount);
// }

export default dropWhile;
