let linearSearchFunction = function (arr, n, target) {
  for (let i = 0; i < n; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};
const arr = [10, 50, 30, 70, 80, 20, 90, 40];
const target = 30;
const n = arr.length;

let result = linearSearchFunction(arr, n, target);
console.log(result);
