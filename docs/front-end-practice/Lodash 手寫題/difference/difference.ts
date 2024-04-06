// function difference(array: any[], values: any[]): any[] {
//   const result = [];
//   for (const element of array) {
//     if (!values.includes(element)) {
//       result.push(element);
//     }
//   }
//   return result;
// }
// function difference(array: any[], values: any[]) {
//   return array.filter((item: any) => !values.includes(item));
// }
function difference(array: any[], values: any[]): any[] {
  const valuesSet = new Set(values);
  //   將 values 轉換為一個 Set。Set 是一種數據結構，它存儲的元素都是唯一的，並且 Set 提供了一個 has 方法，可以用來快速檢查一個元素是否存在於 Set 中。
  return array.filter((value) => !valuesSet.has(value));
  //由於 Set.has 方法的時間複雜度是 O(1)，適合處理非常大的 values 陣列
}
export default difference;
