// * Accepted

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const el = ransomNote[i];
    if (magazine.indexOf(el) != -1) {
      magazine = magazine.replace(el, "");
      // // continue;
    } else {
      return false;
    }
  }
  return true;
};

// Case 1
console.log(canConstruct("a", "b")); // ? false

// Case 2
console.log(canConstruct("aa", "ab")); // ? false

// Case 3
console.log(canConstruct("aa", "aab")); // ? true
