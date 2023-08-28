// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

const arr1 = ["Keep", "Remove", "Keep", "Remove", "Keep"];
function removeEveryOther(arr) {
  return arr.filter((word, index) => index % 2 == 0);
}
console.log(removeEveryOther(arr1));
removeEveryOther(["Hello", "Goodbye", "Hello Again"]);
removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
removeEveryOther([[1, 2]]);
removeEveryOther([["Goodbye"], { Great: "Job" }]);
