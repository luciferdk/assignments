/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {


    // Handle whitespace, casing, and special characters:
    str1 = str1.replace(/\s+/g, "").toLowerCase();
    str2 = str2.replace(/\s+/g, "").toLowerCase();
  
    // Early return for length mismatch:
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Use a single hashmap for efficient character counting:
    const charCount = {};
  
    for (const char of str1) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    for (const char of str2) {
      if (!charCount[char] || charCount[char] === 0) {
        return false;
      }
      charCount[char]--;
    }
  
    // Check if all character counts have been reduced to zero:
    for (const count of Object.values(charCount)) {
      if (count !== 0) {
        return false;
      }
    }
  
    return true;

}

module.exports = isAnagram;
