/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const intersect = function (nums1, nums2) {
  let result = [];
  for (let i = nums1.length - 1; i >= 0; i--) {
    for (let j = nums2.length - 1; j >= 0; j--) {
      if (nums1[i] == nums2[j]) {
        result.push(nums1[i]);
        nums1.splice(i, 1);
        nums2.splice(j, 1);
      }
    }
  }
  console.log(result);
  return result;
};
// test
intersect([1, 2, 2], [2, 1, 1]);
