import { rulesEven } from '../consts';
import randomFunction from '../randomFunction';
import flow from '..';

const gameEven = (numbersCount) => {
  const getRandomQuestion = () => randomFunction(numbersCount);

  const getRightAnswer = (question) => {
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    return rightAnswer;
  };

  const rightAnswersCount = 3;
  return flow(rulesEven, getRandomQuestion, getRightAnswer, rightAnswersCount);
};

export default gameEven;
