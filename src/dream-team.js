const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const names = members
    .filter((member) => typeof member === 'string')
    .map((name) => name.trim().toUpperCase())
    .sort();

  if (names.length === 0) return false;

  return names.reduce((acc, name) => {
    return (acc += name[0]);
  }, '');
};
