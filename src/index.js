import readlineSync from 'readline-sync';

const getAnswer = question => readlineSync.question(question);

export default (rules, getQuestionAndCorrrectAnswer, correctAnswersCount = 3) => {
  const userName = getAnswer(`Welcome to the Brain Games!\n\n${rules}\nMay I have your name? `);
  console.log(`Hello, ${userName}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const { question, correctAnswer } = getQuestionAndCorrrectAnswer();
    const answer = getAnswer(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${answer}' is wrong answer :(. Correct answer was '${correctAnswer}'\nLet's try again!, ${userName}`);
    }
  };

  iter(correctAnswersCount);
};
