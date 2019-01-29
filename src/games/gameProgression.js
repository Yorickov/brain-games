import { getRandomNumber } from '../utils';
import flow from '..';

const getQuestionAndCorrrectAnswer = (maxStep = 9, maxFirst = 9, progressionLength = 10) => {
  const randomStep = getRandomNumber(maxStep);
  const randomFirst = getRandomNumber(maxFirst);
  const randomChoice = getRandomNumber(progressionLength);

  let correctAnswer;

  const getRowNumbers = (str, number, count) => {
    if (count > progressionLength) {
      return str;
    }

    const newStr = (count === randomChoice) ? `${str} ..` : `${str} ${number}`;
    if (count === randomChoice) {
      correctAnswer = number;
    }
    return getRowNumbers(newStr, number + randomStep, count + 1);
  };

  const question = getRowNumbers('', randomFirst, 1);
  return { question, correctAnswer: String(correctAnswer) };
};

export default () => {
  const rulesProgression = 'What number is missing in this progression?';
  return flow(rulesProgression, getQuestionAndCorrrectAnswer);
};
