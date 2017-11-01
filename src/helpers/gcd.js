const gcd = (a, b) => {
  if (a > b) {
    const result = a % b;
    return result === 0 ? b : gcd(result, b);
  }
  return gcd(b, a);
};

export default gcd;
