const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = Array.from(String(n));
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const arr1 = arr.slice();
    arr1.splice(i, 1);
    newArr.push(arr1.join(""));
    console.log(newArr);
  }
  const res = Math.max(...newArr);
  return res;
}

module.exports = {
  deleteDigit,
};
