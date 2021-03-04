const CustomError = require('../extensions/custom-error');

module.exports = function countCats(matrix) {
  let count = 0;

  matrix.flat().forEach((el) => {
    if (el === '^^') count++;
  });

  return count;
};
