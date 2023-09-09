/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s === t) return true;
  var lens = s.length;
  var i = 1;
  if (lens !== t.length) return false;
  while (i < lens) {
    if (s.indexOf(s[i]) === t.indexOf(t[i])) {
      i++;
    } else {
      break;
    }
  }
  return i === lens;
};

// case 1
console.log(isIsomorphic("egg", "add")); // true

// case 2
console.log(isIsomorphic("foo", "bar")); // false

// case 3
console.log(isIsomorphic("paper", "title")); // true
