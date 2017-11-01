import { rulesCalc } from '../helpers/messages';
import randomCalc from '../random-questions/randomCalc';
import flow from '..';

const gameCalc = () => {
  const getQuestionPair = () => randomCalc();
  const rightAnswersCount = 3;
  return flow(rulesCalc, getQuestionPair, rightAnswersCount);
};

export default gameCalc;
