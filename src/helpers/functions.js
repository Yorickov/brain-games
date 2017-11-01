import readlineSync from 'readline-sync';

const getAnswerQuestion = question => readlineSync.question(question);
const doMessage = message => console.log(message);

export { getAnswerQuestion, doMessage };
