// function fill(array, value, start = 0, end = array.length) {
//   if (start < 0) {
//     start = array.length + start;
//   }

//   if (end < 0) {
//     end = array.length + end;
//   }

//   if (end > array.length) {
//     end = array.length;
//   }

//   for (let i = start; i < end; i++) {
//     array[i] = value;
//   }

//   return array;
// }

function fill(array, value, start = 0, end = array.length) {
  return array.fill(value, start, end);
}
export default fill;
