const getRandom = max => 1 + Math.floor(Math.random() * max);

// const getMinNumber = str => String(Math.min(...str.split('')));
const getMinNumber = (str) => {
  let min = 9;
  for (let i = 0; i < str.length; i += 1) {
    min = str[i] < min ? str[i] : min;
  }
  return min;
};

// const getMaxNumber = str => String(Math.max(...str.split('')));
const getMaxNumber = (str) => {
  let max = 0;
  for (let i = 0; i < str.length; i += 1) {
    max = str[i] > max ? str[i] : max;
  }
  return max;
};

const inputSymIntoStr = (str, position, sym) => {
  const beforeSym = str.slice(0, position);
  const afterSym = str.slice(position + 1);
  return `${beforeSym}${sym}${afterSym}`;
};

// const sortNumber = str => str.split('').sort().join('');
const sortNumber = (str) => {
  let firstPart = '';
  let secondPart = '';
  const check = getMinNumber(str);

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === check) {
      firstPart = `${firstPart}${str[i]}`;
    } else {
      secondPart = `${secondPart}${str[i]}`;
    }
  }
  return `${firstPart}${secondPart}`;
};

const isPrime = (num) => {
  const iter = (count) => {
    if (count === 1) {
      return true;
    }
    return (count === 0 || num % count === 0) ? false : iter(count - 1);
  };
  return iter(num - 1);
};

export { getRandom, getMinNumber, getMaxNumber, inputSymIntoStr, sortNumber, isPrime };
