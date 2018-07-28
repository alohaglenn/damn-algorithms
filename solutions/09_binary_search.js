/*
Given a sorted array, write a function that searches for a target value in the array using binary search. If the value exists, return its index. If it doesn't exist, return -1.

Example:
const damnSortedTrackNames = ['BLOOD', 'DNA', 'DUCKWORTH', 'ELEMENT', 'FEAR', 'FEEL', 'GOD', 'HUMBLE', 'LOVE', 'LOYALTY', 'LUST', 'PRIDE', 'XXX', 'YAH'];

binarySearch(damnSortedTrackNames, 'FEEL') => return 5
binarySearch(damnSortedTrackNames, 'BLOOD') => return 0
binarySearch(damnSortedTrackNames, 'Money Trees') => return -1
binarySearch(damnSortedTrackNames, 'Alright') => return -1
*/

/**
 * @param {array} list
 * @param {string} target
 * @return {number}
 */

const binarySearch = (list, targetValue) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const curr = Math.floor((start + end) / 2);

    if (list[curr] === targetValue) {
      return curr;
    } else if (targetValue < list[curr]) {
      end = curr - 1;
    } else {
      start = curr + 1;
    }
  }

  return -1;
};

export default binarySearch;
