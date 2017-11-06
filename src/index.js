import readlineSync from 'readline-sync';

const getAnswerQuestion = question => readlineSync.question(question);
const rightAnswersCount = 3;

const flow = (rules, getQuestionPair) => {
  const userName = getAnswerQuestion(`Welcome to the Brain Games!\n\n${rules}\nMay I have your name?`);
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, answerRight } = getQuestionPair();

    const answer = getAnswerQuestion(`Question: ${question}\nYour answer:`);
    if (answer === answerRight) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answerRight}'\nLet's try again!, ${userName}`);
    }
  };

  iter(rightAnswersCount);
};

export default flow;
