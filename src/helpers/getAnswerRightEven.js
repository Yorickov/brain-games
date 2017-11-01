export default (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};
