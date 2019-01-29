import { getRandomNumber, isPrime } from '../utils';
import flow from '..';

const getCorrectAnswer = question => (isPrime(question) ? 'yes' : 'no');

const getQuestionAndCorrrectAnswer = (numbersCount = 100) => {
  const question = getRandomNumber(numbersCount);
  const correctAnswer = getCorrectAnswer(question);
  return { question, correctAnswer };
};

export default () => {
  const rulesPrime = 'Answer "yes" if number prime otherwise answer "no"';
  return flow(rulesPrime, getQuestionAndCorrrectAnswer);
};
