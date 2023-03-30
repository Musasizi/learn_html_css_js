const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Calculator = {
  add: (num1, num2) => {
    return num1 + num2;
  },
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
};

rl.question("What would you like me to do? (+, -, *, /) : ", (operation) => {
  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);

      switch (operation) {
        case "+":
          console.log(`Result: ${Calculator.add(num1, num2)}`);
          break;
        case "-":
          console.log(`Result: ${Calculator.subtract(num1, num2)}`);
          break;
        case "*":
          console.log(`Result: ${Calculator.multiply(num1, num2)}`);
          break;
        case "/":
          console.log(`Result: ${Calculator.divide(num1, num2)}`);
          break;
        default:
          console.log("Sorry, I cannot perform that operation.");
          break;
      }
      rl.close();
    });
  });
});
