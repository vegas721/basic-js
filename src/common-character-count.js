const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const s1Arr = Array.from(s1);
  const s2Arr = Array.from(s2);
  let result = [];
  const maxLengthArr = Math.max(s1Arr.length, s2Arr.length);
  for (let i = 0; i < maxLengthArr; i++) {
    if (s1Arr.includes(s2Arr[i])) {
      result.push(s2Arr[i]);
      s1Arr.splice(s1Arr.indexOf(s2Arr[i]), 1);
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount,
};
