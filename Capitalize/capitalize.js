const capitalize = string => {
  let cap = string.charAt(0).toUpperCase();
  let word = cap + string.slice(1);
  return word;
};

module.exports = capitalize;
