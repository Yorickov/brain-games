import { rulesGcd } from '../helpers/messages';
import randomGcd from '../random-questions/randomGcd';
import flow from '..';

const gameGcd = () => {
  const getQuestionPair = () => randomGcd();
  const rightAnswersCount = 3;
  return flow(rulesGcd, getQuestionPair, rightAnswersCount);
};

export default gameGcd;
