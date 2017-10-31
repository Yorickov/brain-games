import { greeting, askUserName, rulesEven, endGameBad, endGameGood, userAnswerRight, userAnswerWrong } from './consts';
import { doMessage, getAnswerQuestion } from './functions';
import randomFunction from './randomFunction';

const greetUser = () => {
  const greetPlayer = `${greeting}${askUserName}`;
  const message = `Hello, ${getAnswerQuestion(greetPlayer)}!`;
  return doMessage(message);
};

const gameEven = (numbersCount, rightAnswersCount) => {
  const greetPlayer = `${greeting}${rulesEven}`;
  doMessage(greetPlayer);
  const userName = getAnswerQuestion(askUserName);
  const message = `Hello, ${userName}!\n`;
  doMessage(message);

  const iter = (count) => {
    if (count === 0) {
      const messageEndGood = `${endGameGood}, ${userName}!`;
      return doMessage(messageEndGood);
    }

    const randomNumber = randomFunction(numbersCount);
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const question = `Question: ${randomNumber} Your answer:`;
    const answer = getAnswerQuestion(question);

    if (answer === rightAnswer) {
      doMessage(userAnswerRight);
      return iter(count - 1);
    }

    const messageEndGBad = `'${answer}' ${userAnswerWrong} '${rightAnswer}'\n${endGameBad}, ${userName}`;
    return doMessage(messageEndGBad);
  };

  iter(rightAnswersCount);
};

export { greetUser, gameEven };
