import { cons } from 'hexlet-pairs';
import { getRandom, isPrime } from '../utils';
import flow from '..';

const getAnswerRight = (question) => {
  const result = isPrime(question) ? 'yes' : 'no';
  return result;
};

const randomPrime = () => {
  const numberCounts = 100;

  const question = getRandom(numberCounts);
  const answerRight = getAnswerRight(question);
  return cons(question, answerRight);
};

const gamePrime = () => {
  const getQuestionPair = () => randomPrime();
  const rulesPrime = 'Answer "yes" if number prime otherwise answer "no"';
  return flow(rulesPrime, getQuestionPair);
};

export default gamePrime;
