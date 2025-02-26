var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 1; k < nums.length; k++) {
      if (nums[i] + nums[k] == target) {
        return [i, k];
      }
    }
  }
  return [];
};
const nums = [8, 1, 2, 0];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
