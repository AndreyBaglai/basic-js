const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let result = '';

  if (!separator) separator = '+';
  if (!additionSeparator) additionSeparator = '|';
  if (!repeatTimes) repeatTimes = 1;
  if (!additionRepeatTimes) additionRepeatTimes = 1;

  if (addition === false)  addition = 'false';
  if (addition === null)  addition = 'null';

  addition = addition
    ? (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length)
    : '';

  result = `${str}${addition}${separator}`;
  result = result.repeat(repeatTimes).slice(0, -separator.length);

  return result;
};
