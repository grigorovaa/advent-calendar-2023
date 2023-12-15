const text = `fivethreeonezblqnsfk1
two74119onebtqgnine
jrjh5vsrxbhsfour3
tn5eightfncnzcdtthree8
`;

function getNumberSum() {
  const splitStrings = text.split("\n");

  const match = splitStrings.map((str) => {
    const firstDigitMatch = str.match(/\d/);
    const lastDigitMatch = str.match(/\d(?=\D*$)/);

    const firstDigit = firstDigitMatch ? firstDigitMatch[0] : null;
    const lastDigit = lastDigitMatch ? lastDigitMatch[0] : null;

    return firstDigit + lastDigit;
  });

  let sum = 0;
  for (let i = 0; i < splitStrings.length; i++) {
    sum += Number(match[i]);
    console.log("sum", sum);
  }
  return sum;
}

getNumberSum(text);
