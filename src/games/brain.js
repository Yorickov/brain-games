import readlineSync from 'readline-sync';

const greeting = 'Welcome to the Brain Games!\n\n';
const askUserName = 'May I have your name?';

export default () => {
  const greetPlayer = `${greeting}${askUserName}`;
  const message = `Hello, ${readlineSync.question(greetPlayer)}!`;
  return console.log(message);
};
