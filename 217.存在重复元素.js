/***
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false
 *
 * 思路：
 *
 *
 *
 */
function isRepet(nums) {
  for (const item of nums) {
    let v1 = nums.pop();
    if (nums.indexOf(v1) > -1) {
      return true;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 1];
const res = isRepet(arr);
console.log(res);
