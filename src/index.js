import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getAnswerQuestion = question => readlineSync.question(question);
const doMessage = message => console.log(message);

const rightAnswersCount = 3;

const flow = (rules, getQuestionPair) => {
// greetings
  const greeting = 'Welcome to the Brain Games!';
  const greetPlayer = `${greeting}\n\n${rules}`;
  doMessage(greetPlayer);

  const askUserName = 'May I have your name?';
  const userName = getAnswerQuestion(askUserName);
  const message = `Hello, ${userName}!\n`;
  doMessage(message);
  // process
  const iter = (count) => {
    if (count === 0) {
      const messageEndGood = `Congratulations, ${userName}!`;
      return doMessage(messageEndGood);
    }
    // QA
    const QuestionPair = getQuestionPair();
    const rightAnswer = cdr(QuestionPair);

    const answer = getAnswerQuestion(`Question: ${car(QuestionPair)}\nYour answer:`);
    if (answer === rightAnswer) {
      const userAnswerRight = 'Correct!';
      doMessage(userAnswerRight);
      return iter(count - 1);
    }

    const messageEndGBad = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again!, ${userName}`;
    return doMessage(messageEndGBad);
  };

  iter(rightAnswersCount);
};

export default flow;
