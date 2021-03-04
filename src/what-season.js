const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(Object.prototype.toString.call(date) === "[object Date]" )) throw new Error('THROWN');

  const monthIdx = date.getMonth();

  if(monthIdx === 11 || monthIdx === 0 || monthIdx === 1) {
    return 'winter';
  }
  if(monthIdx === 2 || monthIdx === 3 || monthIdx === 4) {
    return 'spring';
  }
  if(monthIdx === 5 || monthIdx === 6 || monthIdx === 7) {
    return 'summer';
  }
  if(monthIdx === 8 || monthIdx === 9 || monthIdx === 10) {
    return 'fall';
  }
};