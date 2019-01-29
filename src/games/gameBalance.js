import { getRandomNumber, getMinNumber, getMaxNumber } from '../utils';
import flow from '..';

// const sortNumber = str => str.split('').sort().join('');
export const sortBalancedNumber = (str) => {
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

const inputSymIntoStr = (str, position, sym) => {
  const beforeSym = str.slice(0, position);
  const afterSym = str.slice(position + 1);
  return `${beforeSym}${sym}${afterSym}`;
};

const balance = (str) => {
  const min = getMinNumber(str);
  const max = getMaxNumber(str);
  if (max - min <= 1) {
    return str;
  }

  const posMin = str.indexOf(min);
  const posMax = str.indexOf(max);

  const strFixMin = inputSymIntoStr(str, posMin, Number(min) + 1);
  const strFixMax = inputSymIntoStr(strFixMin, posMax, Number(max) - 1);
  return balance(strFixMax);
};

const getQuestionAndCorrrectAnswer = (randomNumber = 1000) => {
  const number = getRandomNumber(randomNumber);

  const correctAnswer = sortBalancedNumber(balance(String(number)));
  const question = `${number}`;
  return { question, correctAnswer };
};

export default () => {
  const rulesBalance = 'Balance the given number.';
  return flow(rulesBalance, getQuestionAndCorrrectAnswer);
};
