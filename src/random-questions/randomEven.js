import { cons } from 'hexlet-pairs';
import randomFunction from '../helpers/randomFunction';
import getAnswerRightEven from '../helpers/getAnswerRightEven';

const randomEven = () => {
  const numberCounts = 20;
  const question = randomFunction(numberCounts);
  const answerRight = getAnswerRightEven(question);
  return cons(question, answerRight);
};

export default randomEven;
