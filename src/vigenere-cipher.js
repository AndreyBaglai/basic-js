const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error();
  }    
  decrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error();
  }
}

module.exports = VigenereCipheringMachine;
