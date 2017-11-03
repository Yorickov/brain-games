import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getAnswerQuestion = question => readlineSync.question(question);
const rightAnswersCount = 3;

const flow = (rules, getQuestionPair) => {
// greetings
  const greeting = 'Welcome to the Brain Games!';
  const greetPlayer = `${greeting}\n\n${rules}`;
  console.log(greetPlayer);

  const askUserName = 'May I have your name?';
  const userName = getAnswerQuestion(askUserName);
  const message = `Hello, ${userName}!\n`;
  console.log(message);
  // process
  const iter = (count) => {
    if (count === 0) {
      const messageEndGood = `Congratulations, ${userName}!`;
      console.log(messageEndGood);
      return;
    }
    // QA
    const QuestionPair = getQuestionPair();
    const rightAnswer = cdr(QuestionPair);

    const answer = getAnswerQuestion(`Question: ${car(QuestionPair)}\nYour answer:`);
    if (answer === rightAnswer) {
      const userAnswerRight = 'Correct!';
      console.log(userAnswerRight);
      iter(count - 1);
    } else {
      const messageEndGBad = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again!, ${userName}`;
      console.log(messageEndGBad);
    }
  };

  iter(rightAnswersCount);
};

export default flow;
