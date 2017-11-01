import { greeting, askUserName } from '../consts';
import { doMessage, getAnswerQuestion } from '../functions';

export default () => {
  const greetPlayer = `${greeting}${askUserName}`;
  const message = `Hello, ${getAnswerQuestion(greetPlayer)}!`;
  return doMessage(message);
};
