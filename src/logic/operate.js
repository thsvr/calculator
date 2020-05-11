const Big = require('big.js');

const Operate = (numberOne, numberTwo, operation) => {
  const firstNum = Big(numberOne);
  const secondNum = Big(numberTwo);
  let finalResult;

  switch (operation) {
    case '+':
      finalResult = firstNum.plus(secondNum);
      break;
    case '-':
      finalResult = firstNum.minus(secondNum);
      break;
    case 'X':
      finalResult = firstNum.times(secondNum);
      break;
    case '/':
      if (secondNum === '0') {
        finalResult = NaN;
      }
      finalResult = firstNum.div(secondNum);
      break;
    default: break;
  }
  return finalResult.toString();
};

export default Operate;
