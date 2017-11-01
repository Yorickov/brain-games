import { greeting, askUserName } from '../helpers/messages';
import { doMessage, getAnswerQuestion } from '../helpers/functions';

export default () => {
  const greetPlayer = `${greeting}${askUserName}`;
  const message = `Hello, ${getAnswerQuestion(greetPlayer)}!`;
  return doMessage(message);
};
