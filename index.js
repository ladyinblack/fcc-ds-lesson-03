// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Add Items to an Array with push() and unshift()</h1>`;

/** TODO:
 * We have defined a function, mixedNumbers, which we are passing an array as an argument.  Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array conatins representaions of the numbers 1-9 in order.
 
 function mixedNumbers(arr) {
   // Only change code below this line 
 
   // Only change code above this line 
   return arr;
 }
 
 console.log(mixedNumbers(['IV', 5, 'six']));
 */

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
