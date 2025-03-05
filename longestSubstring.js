/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let string = new Map();
  let k = 0;
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (string.has(s[i])) {
      if (string.get(s[i]) >= k) {
        k = string.get(s[i]) + 1;
      }
    }

    string.set(s[i], i);
    number = Math.max(number, i - k + 1);
  }

  return number;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
