import { getRandomNumber, gcd } from '../utils';
import flow from '..';

const getQuestionAndCorrrectAnswer = (maxNumber = 100) => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);
  return { question, correctAnswer: String(correctAnswer) };
};

export default () => {
  const rulesGcd = 'Find the greatest common divisor of given numbers.';
  return flow(rulesGcd, getQuestionAndCorrrectAnswer);
};
