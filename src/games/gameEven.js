import { getRandom } from '../utils';
import flow from '..';

const getAnswerRight = (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};

const randomEven = () => {
  const numberCounts = 20;

  const question = getRandom(numberCounts);
  const answerRight = getAnswerRight(question);
  return { question, answerRight };
};

const gameEven = () => {
  const getQuestionPair = () => randomEven();
  const rulesEven = 'Answer "yes" if number even otherwise answer "no"';
  return flow(rulesEven, getQuestionPair);
};

export default gameEven;
