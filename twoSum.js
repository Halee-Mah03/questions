var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
  return [];
};
const nums = [11, 15, 2, 7];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
