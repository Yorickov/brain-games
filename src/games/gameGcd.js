import { cons } from 'hexlet-pairs';
import randomFunction from '../utils';
import flow from '..';

const gcd = (a, b) => {
  if (a > b) {
    const result = a % b;
    return result === 0 ? b : gcd(result, b);
  }
  return gcd(b, a);
};

const randomGcd = () => {
  const firstNumber = randomFunction(100);
  const secondNumber = randomFunction(100);

  const question = `${firstNumber} ${secondNumber}`;
  const answerRight = gcd(firstNumber, secondNumber);
  return cons(question, String(answerRight));
};

const gameGcd = () => {
  const getQuestionPair = () => randomGcd();
  const rulesGcd = 'Find the greatest common divisor of given numbers.';
  const rightAnswersCount = 3;
  return flow(rulesGcd, getQuestionPair, rightAnswersCount);
};

export default gameGcd;
