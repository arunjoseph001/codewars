/*Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
(change a to b and vice versa). Leave any incidence of c untouched.
Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

function switcheroo(x) {
  let arr = [...x];
  return arr
    .map((ele) => {
      if (ele === "a") {
        return "b";
      }
      if (ele === "b") {
        return "a";
      }
      return ele;
    })
    .join("");
}

console.log(switcheroo("abc"));
switcheroo("aaabcccbaaa");

// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")