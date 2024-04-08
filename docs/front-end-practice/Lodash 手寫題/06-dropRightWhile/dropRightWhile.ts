function dropRightWhile(array: any[], predicate: (arg0: any) => boolean) {
  let index = array.length - 1;
  while (index >= 0 && predicate(array[index])) {
    index--;
  }
  return array.slice(0, index + 1);
}
// function dropRightWhile(array, predicate) {
//   for (let i = array.length - 1; i >= 0; i--) {
//     if (!predicate(array[i], i, array)) {
//       return array.slice(0, i + 1);
//     }
//   }
//   return [];
// }
export default dropRightWhile;
