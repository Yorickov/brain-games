import { cons } from 'hexlet-pairs';
import randomFunction from '../helpers/randomFunction';
import gcd from '../helpers/gcd';

const randomGcd = () => {
  const firstNumber = randomFunction(100);
  const secondNumber = randomFunction(100);

  const question = `${firstNumber} ${secondNumber}`;
  const answerRight = gcd(firstNumber, secondNumber);
  return cons(question, String(answerRight));
};

export default randomGcd;
