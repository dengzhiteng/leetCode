// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let curSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 若当前元素之前的和＜0，丢弃当前元素之前的和
    curSum = Math.max(nums[i], nums[i] + curSum);
    // 将当前值与最大值比较，取最大
    maxSum = Math.max(curSum, maxSum);
  }
  return maxSum;
};
console.log(maxSubArray(nums));
