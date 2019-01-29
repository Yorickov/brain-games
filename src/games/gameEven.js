import { getRandomNumber, isEven } from '../utils';
import flow from '..';

const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const getQuestionAndCorrrectAnswer = (numbersCount = 20) => {
  const question = getRandomNumber(numbersCount);
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

export default () => {
  const rulesEven = 'Answer "yes" if number is even otherwise answer "no"';
  return flow(rulesEven, getQuestionAndCorrrectAnswer);
};
