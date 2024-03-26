/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  
// Normalize the input string:
str1 = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

// Compare characters from both ends:
let left = 0;
let right = str1.length - 1;

while (left < right) {
  if (str1[left] !== str1[right]) {
    return false; // Not a palindrome
  }
  left++;
  right--;
}

return true; // It's a palindrome!

}

module.exports = isPalindrome;
