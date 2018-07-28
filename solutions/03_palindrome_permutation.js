/*
Given a string, write an algorithm that returns a boolean based on whether or not any permutation can form a palindrome. The input string will contain lowercase letters only.

Example:
'HUMBLE' => return false
'LOYALTY' => return false
'XXX' => return true

'forFree' => return true
'forSale' => return false

'Rihanna' => return false
'Hanna' => return true
'Anna' => return true
*/

/**
 * @param  {string}  str
 * @return {Boolean}
 */

const isPalindromePermutation = (str) => {
  const set = new Set();

  [...str].forEach((char) => {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  });

  return set.size <= 1;
};

export default isPalindromePermutation;
