// Accepted

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let i = 1;
  let answer = [];
  while (i <= n) {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
      answer.push("FizzBuzz");
    } else if (Number.isInteger(i / 3)) {
      answer.push("Fizz");
    } else if (Number.isInteger(i / 5)) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
    i++;
  }
  return answer;
};

// Case 1
console.log(fizzBuzz(3)); // ? ['1', '2', 'Fizz']

// Case 2
console.log(fizzBuzz(5)); // ? ['1', '2', 'Fizz', '4', 'Buzz']

// Case 3
console.log(fizzBuzz(15)); // ? ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
