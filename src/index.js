import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getAnswerQuestion = question => readlineSync.question(question);
const doMessage = message => console.log(message);

const greeting = 'Welcome to the Brain Games!\n\n';
const askUserName = 'May I have your name?';
const endGameBad = 'Let\'s try again!';
const endGameGood = 'Congratulations';
const userAnswerRight = 'Correct!';
const userAnswerWrong = 'is wrong answer ;(. Correct answer was';

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
    const rightAnswer = cdr(QuestionPair);

    const answer = getAnswerQuestion(`Question: ${car(QuestionPair)}\nYour answer:`);
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
