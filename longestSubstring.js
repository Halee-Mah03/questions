/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let string = {};
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (!string[s[i]]) {
      string[s[i]] = true;
      number++;
    }
  }

  return number;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
