//Javascript Calculator

console.log("Welcome to my JS Calculator");
let int1 = prompt("Input first value: ");
let int2 = prompt("Input the second value: ");
let signChoice = prompt("Input signs +,-,*: ")


switch(signChoice){
    case '+':
      console.log("Your answer is " + (int1 + int2));
      break;
    case '*':
      console.log("Your answer is " + (int1 * int2));
      break;
    case '-':
      console.log("Your answer is " + (int1 - int2));
      break;
    case '/':
      console.log("Your answer is " + (int1 / int2));
        break;
    default:
      console.log('Sign does not exist.');
      break;
  }
