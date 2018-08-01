/*
Binary search is a performant algorithm used to find a target value in an ordered list. It involves repeatedly dividing a list in half at each iteration after comparing the target value with the middle value of a list.

A basic algorithm for binary search:
- if the target value is in the middle of the list, return its index
- if the target value is less than the value at the middle, narrow the search to the lower half
- if the target value is greater than the value at the middle, narrow the search to the upper half
- continue to check until the value is found or the list is empty

Given a sorted array, write a function that searches for a target value in the array using binary search. If the value exists, return its index. If it doesn't exist, return -1.

Example:
const damnSortedTrackNames = ['BLOOD', 'DNA', 'DUCKWORTH', 'ELEMENT', 'FEAR', 'FEEL', 'GOD', 'HUMBLE', 'LOVE', 'LOYALTY', 'LUST', 'PRIDE', 'XXX', 'YAH']; => start with 'GOD' as the mid value

binarySearch(damnSortedTrackNames, 'PRIDE') => return 11
  - 'GOD' < 'PRIDE' => so search upper bound
  - 'LUST' < 'PRIDE' => so search upper bound
  - 'XXX' > 'PRIDE' => so search lower bound
  - 'PRIDE' === 'PRIDE' => target found, so return index of 11

binarySearch(damnSortedTrackNames, 'Money Trees') => return -1
binarySearch(damnSortedTrackNames, 'Alright') => return -1
*/

/**
 * @param {array} list
 * @param {string} target
 * @param {number} [start=0] => optional param
 * @param {number} [end=list.length-1] => optional param
 * @return {number}
 */

const binarySearch = (list, targetValue) => {};

export default binarySearch;
