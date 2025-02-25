function twoSum(numbers, target) {
  const map = new Map();
  for (const i = 0; i < numbers.length; i++) {
    const complement = target - numbers[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(numbers[i], i);
  }
  return [];
}

const numbers = [2, 5, 89];
const target = 94;
const result = twoSum(numbers, target);
console.log(result);
