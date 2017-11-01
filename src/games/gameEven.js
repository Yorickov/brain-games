import { rulesEven } from '../helpers/messages';
import randomEven from '../random-questions/randomEven';
import flow from '..';

const gameEven = () => {
  const getQuestionPair = () => randomEven();
  const rightAnswersCount = 3;
  return flow(rulesEven, getQuestionPair, rightAnswersCount);
};

export default gameEven;
