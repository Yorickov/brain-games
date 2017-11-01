import { cons } from 'hexlet-pairs';
import { getRandom, getMinNumber, getMaxNumber } from '../utils';
import flow from '..';

const balance = (str) => {
  const min = getMinNumber(str);
  const max = getMaxNumber(str);
  if (max - min <= 1) {
    return str;
  }

  const posMin = str.indexOf(min);
  const posMax = str.indexOf(max);
  const strFixMin = `${str.slice(0, posMin)}${Number(min) + 1}${str.slice(posMin + 1)}`;
  const strFixMax = `${strFixMin.slice(0, posMax)}${Number(max) - 1}${strFixMin.slice(posMax + 1)}`;

  return balance(strFixMax);
};

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

const randomBalance = () => {
  const number = getRandom(1000);
  const answerRight = sortNumber(balance(String(number)));
  const question = `${number}`;

  return cons(question, answerRight);
};

const gameBalance = () => {
  const getQuestionPair = () => randomBalance();
  const rulesBalance = 'Balance the given number.';
  const rightAnswersCount = 3;

  return flow(rulesBalance, getQuestionPair, rightAnswersCount);
};

export default gameBalance;
