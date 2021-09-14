/***
 * 找出数组中最小的元素
 */
function arrMin(arr) {
  let stack = [];
  stack.push(arr[0]);
  for (const item of arr) {
    if (item < stack[0]) {
      stack[0] = item;
    }
  }
  return stack.pop();
}
const arr = [1, 2, 3111, 234, 42, 4, 567, 8, 34, 535, 3452, 0, -1, -1268];
const res = arrMin(arr);
console.log(res);
