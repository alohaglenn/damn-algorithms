/*
Given a string, write an algorithm that returns a boolean based on whether or not any permutation can form a palindrome. The input string will contain lowercase letters only.

Example:
'humble' => return false
'loyalty' => return false
'xxx' => return true

'forfree' => return true ('freoerf')
'forsale' => return false

'rihanna' => return false
'hanna' => return true ('anhna')
'anna' => return true
*/

/**
 * @param  {string}  str
 * @return {Boolean}
 */

const stringInput = 'Lisa Bonet ate no basil'

const isPalindromePermutation = (str) => {
  const set = new Set();
  const stringSplit = [...str];

  for (var i = 0; i < stringInput.length; i++) {
    if (!set.has(stringInput[i])) {
      set.add(stringInput[i])
    } else {
      set.delete(stringInput[i])
    }
  }
};

isPalindromePermutation(stringInput);

export default isPalindromePermutation;
