const number = 1234567;

const parseNumber = (num) => {
  const result = [];

  while (num > 0) {
    result.unshift(num % 10); // get the last digit
    num = parseInt(num / 10); // get rid of the last digit
  }

  return result;
};

console.log(parseNumber(number));
