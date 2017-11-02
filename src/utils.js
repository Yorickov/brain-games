const getRandom = max => 1 + Math.floor(Math.random() * max);

const getMinNumber = (str) => {
  let min = 9;
  for (let i = 0; i < str.length; i += 1) {
    min = str[i] < min ? str[i] : min;
  }
  return min;
};

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

export { getRandom, getMinNumber, getMaxNumber, inputSymIntoStr };
