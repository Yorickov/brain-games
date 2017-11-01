import { greeting, askUserName, endGameBad, endGameGood, userAnswerRight, userAnswerWrong } from './consts';
import { doMessage, getAnswerQuestion } from './functions';

const flow = (rules, getRandomQuestion, getRightAnswer, rightAnswersCount) => {
// greetings
  const greetPlayer = `${greeting}${rules}`;
  doMessage(greetPlayer);
  const userName = getAnswerQuestion(askUserName);
  const message = `Hello, ${userName}!\n`;
  doMessage(message);
  // process
  const iter = (count) => {
    if (count === 0) {
      const messageEndGood = `${endGameGood}, ${userName}!`;
      return doMessage(messageEndGood);
    }
    // QA
    const randomQuestion = getRandomQuestion();
    const rightAnswer = getRightAnswer(randomQuestion);
    const question = `Question: ${randomQuestion} Your answer:`;
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

export default flow;
