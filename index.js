// Import stylesheets
import './style.css';

// Write Javascript code!
function addtwonum(num1, num2, myFunc) {
  console.log('Add two numbers');
  myFunc(num1, num2);
}

function newFunc(num1, num2) {
  let num3 = '';
  num3 = num1 + num2;
  console.log('Addition of two numbers :' + num3);
}

//addtwonum(1, 2, newFunc);
setTimeout(addtwonum, 2000, 1, 3, newFunc);
