import { car, cdr } from 'hexlet-pairs';
import { greeting, askUserName, endGameBad, endGameGood, userAnswerRight, userAnswerWrong } from './helpers/messages';
import { doMessage, getAnswerQuestion } from './helpers/functions';

const flow = (rules, getQuestionPair, rightAnswersCount) => {
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
    const QuestionPair = getQuestionPair();
    const question = `Question: ${car(QuestionPair)}\nYour answer:`;
    const rightAnswer = cdr(QuestionPair);

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
