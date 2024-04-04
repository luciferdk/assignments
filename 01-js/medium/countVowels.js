/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  
  /*
  
  var count = 0;

  for (const char of str.toLowerCase()) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }

  }
  return count;
 */


  // ------------------------------------------------------------------------------------------- 

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize the count
  let count = 0;

  // Convert the string to lowercase
  // str = str.toLowerCase();

  // Iterate over each character in the string
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  // Return the number of vowels
  return count; 
  /*
*/
}

module.exports = countVowels;