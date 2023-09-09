/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let myArray = [];
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    let x = i - 1;
    while (x >= 0) {
      element += nums[x]
      --x;
    }
    myArray.push(element);
  }
  return myArray;
};

// case 1
console.log(runningSum([1, 2, 3, 4]));

// case 2
console.log(runningSum([1, 1, 1, 1, 1]));

// case 3
console.log(runningSum([3, 1, 2, 10, 1]));