const add = function() {
	const args = Array.from(arguments);
  const sum = args.reduce((total, current) => {
    return total + current;
  });
  return sum;
};

const subtract = function() {
	const args = Array.from(arguments);
  const diff = args.reduce((total, current) => {
    return total - current;
  });
  return diff;
};

const sum = function(arr) {
  let totalSum = 0;
  if (arr.length !== 0) {
    totalSum = arr.reduce((total, current) => {
      return total + current;
    });
  }
  return totalSum;
};

const multiply = function(arr) {
  let product = 0;
  if (arr.length !== 0) {
    product = arr.reduce((total, current) => {
      return total * current;
    });
  }
  return product;
};

const power = function(num, exp) {
  let result = 1;
	for (let i = 0; i < exp; i++)
    result = result * num;
  return result;
};

const factorial = function(num) {
  let result = 1;
  for (let i = 1; i < num+1; i++)
    result = result * i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
