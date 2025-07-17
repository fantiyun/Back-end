const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

module.exports = {
  add,
  multiply,
  factorial
}