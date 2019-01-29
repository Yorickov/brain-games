export const getRandomNumber = max => 1 + Math.floor(Math.random() * max);

export const isEven = num => num % 2 === 0;

// const getMinNumber = str => String(Math.min(...str.split('')));
export const getMinNumber = (str) => {
  let min = 9;
  for (let i = 0; i < str.length; i += 1) {
    min = str[i] < min ? str[i] : min;
  }
  return min;
};

// const getMaxNumber = str => String(Math.max(...str.split('')));
export const getMaxNumber = (str) => {
  let max = 0;
  for (let i = 0; i < str.length; i += 1) {
    max = str[i] > max ? str[i] : max;
  }
  return max;
};

export const isPrime = (num) => {
  const iter = (count) => {
    if (count === 1) {
      return true;
    }
    return (count === 0 || num % count === 0) ? false : iter(count - 1);
  };
  return iter(num - 1);
};

export const gcd = (a, b) => {
  if (a > b) {
    const result = a % b;
    return result === 0 ? b : gcd(result, b);
  }
  return gcd(b, a);
};
