const caesarCipher = (string, shiftAmnt) => {
  let charCodeArr = [];

  for (let i = 0; i < string.length; i++) {
    charCodeArr[i] = string.charCodeAt(i);
  }

  let shift = charCodeArr.map(num => {
    if (num < 65 || num > 122 || (num > 90 && num < 97)) {
      return num;
    } else if (num >= 65 && num <= 90) {
      return ((num + shiftAmnt - 64) % 26) + 64;
    } else {
      return ((num + shiftAmnt - 96) % 26) + 96;
    }
  });

  return shift
    .map(num => {
      return String.fromCharCode(num);
    })
    .join('');
};

module.exports = caesarCipher;
