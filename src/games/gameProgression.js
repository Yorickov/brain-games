import { getRandom } from '../utils';
import flow from '..';

const progressionLength = 10;
const maxStep = 9;
const maxFirst = 9;

const randomProgression = () => {
  const randomStep = getRandom(maxStep);
  const randomFirst = getRandom(maxFirst);
  const randomChoice = getRandom(progressionLength);

  let answerRight;

  const getRowNumbers = (str, number, count) => {
    if (count > progressionLength) {
      return str;
    }

    const newStr = (count === randomChoice) ? `${str} ..` : `${str} ${number}`;
    if (count === randomChoice) {
      answerRight = number;
    }
    return getRowNumbers(newStr, number + randomStep, count + 1);
  };

  const question = getRowNumbers('', randomFirst, 1);
  return { question, answerRight: String(answerRight) };
};

const gameProgresssion = () => {
  const getQuestionPair = () => randomProgression();
  const rulesProgression = 'What number is missing in this progression?';
  return flow(rulesProgression, getQuestionPair);
};

export default gameProgresssion;
