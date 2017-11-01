import { cons } from 'hexlet-pairs';
import { getRandom } from '../utils';
import flow from '..';

const getAnswerRightEven = (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};

const randomEven = () => {
  const numberCounts = 20;
  const question = getRandom(numberCounts);
  const answerRight = getAnswerRightEven(question);
  return cons(question, answerRight);
};

const gameEven = () => {
  const getQuestionPair = () => randomEven();
  const rulesEven = 'Answer "yes" if number even otherwise answer "no"';
  const rightAnswersCount = 3;

  return flow(rulesEven, getQuestionPair, rightAnswersCount);
};

export default gameEven;
