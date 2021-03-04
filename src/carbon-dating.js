const CustomError = require('../extensions/custom-error');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const APPROXIMATION = 0.693;
  const floatActivity = parseFloat(sampleActivity);

  if (
    typeof sampleActivity === 'string' &&
    sampleActivity &&
    floatActivity > 0 &&
    floatActivity < 15
  ) {
    return Math.ceil(
      Math.log(MODERN_ACTIVITY / floatActivity) / (APPROXIMATION / HALF_LIFE_PERIOD),
    );
  } else return false;
};
