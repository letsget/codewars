const number  = 1234567;

const parseNumber = (num) => {

  const result = [];

  while (num > 0) {
      result.unshift(num % 10);
      num = parseInt(num / 10);
  }

  return result;

}

