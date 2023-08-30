// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.
/**
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parenStr) {
  let indent = 0;
  for (let i = 0; i < parenStr.length && indent >= 0; i++) {
    indent += parenStr[i] == "(" ? 1 : -1;
  }
  return indent == 0;
}

validParentheses(input);
