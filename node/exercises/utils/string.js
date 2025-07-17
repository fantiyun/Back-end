const reverse = (str) => str.split('').reverse().join('');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const wordCount = str => str.split(' ').length;

module.exports = {
  reverse,
  capitalize,
  wordCount
}