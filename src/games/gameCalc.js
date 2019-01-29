import { getRandomNumber } from '../utils';
import flow from '..';

const getQuestionAndCorrrectAnswer = (maxNumber = 100) => {
  const firstNumber = getRandomNumber(maxNumber);
  const secondNumber = getRandomNumber(maxNumber);
  const choosenSign = getRandomNumber(3);

  let sign;
  let correctAnswer;

  switch (choosenSign) {
    case 1:
      sign = '+';
      correctAnswer = firstNumber + secondNumber;
      break;
    case 2:
      sign = '-';
      correctAnswer = firstNumber - secondNumber;
      break;
    default:
      sign = '*';
      correctAnswer = firstNumber * secondNumber;
  }

  const question = `${firstNumber} ${sign} ${secondNumber}`;
  return { question, correctAnswer: String(correctAnswer) };
};

export default () => {
  const rulesCalc = 'What is the result of the expression?';
  return flow(rulesCalc, getQuestionAndCorrrectAnswer);
};
