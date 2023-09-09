// Accepted

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  let i = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num - 1;
    }
    i++
  }
  return i;
};

// Case 1
console.log(numberOfSteps(14));

// Case 2
console.log(numberOfSteps(8));

// Case 3
console.log(numberOfSteps(123));