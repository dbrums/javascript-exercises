const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.length !== 0 ? arr.reduce((acc, cur) => acc + cur) : 0;
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur);
};

const power = function(base, power) {
  return Math.pow(base, power);
};

const factorial = function(num) {
	if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
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
