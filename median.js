/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((m, n) => m - n);

  const number = mergedArray.length;

  if (number % 2 !== 0) {
    return mergedArray[Math.floor(number / 2)];
  }
  return (
    (mergedArray[Math.floor(number / 2) - 1] +
      mergedArray[Math.floor(number / 2)]) /
    2
  );
};
