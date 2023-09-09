/**
 * @param {number[]} nums
 * @returns {number}
 */
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSide = Array(...nums);
    leftSide.splice(i);
    let rightSide = Array(...nums);
    rightSide.splice(0, leftSide.length + 1);
    let x = 0;
    for (let l = 0; l < leftSide.length; l++) {
      let el = leftSide[l];
      x += el;
    }
    let y = 0;
    for (let r = 0; r < rightSide.length; r++) {
      let el = rightSide[r];
      y += el;
    }
    if (x === y) {
      return i;
    } else if (i === nums.length - 1) {
      return -1;
    }
  }
};

// case 1
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3

// case 2
console.log(pivotIndex([1, 2, 3])); // -1

// case 3
console.log(pivotIndex([2, 1, -1])); // 0
