const analyze = arr => {
  const average = () => {
    let sum = arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    return sum / arr.length;
  };

  const min = () => {
    let lowest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }

    return lowest;
  };

  const max = () => {
    let highest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      }
    }

    return highest;
  };

  const length = () => {
    return arr.length;
  };

  return {
    average,
    min,
    max,
    length
  };
};

module.exports = analyze;
