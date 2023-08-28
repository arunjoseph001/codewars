// Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  // Getting the string as a parameter
  // and typecasting it into an integer
  // let myFunc = (num) => Number(num);
  let intArr = Array.from(String(n), (num) => Number(num));
  return intArr.reverse();
}

console.log(digitize(35231))