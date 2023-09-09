// * Accepted

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let tIndex = 0;
  let sIndex = 0;
  let str = "";
  while (tIndex < t.length) {
    let tPointer = t[tIndex];
    let sPointer = s[sIndex];
    if (tPointer === sPointer) {
      tIndex++;
      sIndex++;
      str += tPointer;
    } else {
      tIndex++;
    }
  }
  return str === s;
};

// case 1
console.log(isSubsequence("abc", "ahbgdc")); // ? true

// case 2
console.log(isSubsequence("axc", "ahbgdc")); // ? false
