/*
Given an array of tracks and a target track, remove all instances of that target track in the array and return the new length of the array. Perform the removal of the target in-place without creating extra space for another array.

Example:
const damn = ['DNA', 'HUMBLE', 'LOVE', 'DNA', 'LOYALTY', 'DNA', 'DNA'];
const target1 = 'DNA';

const tpab = ['Institutionalized', 'u', 'Alright', 'Momma', 'Mortal Man'];
const target2 = 'u';

removeInstances(damn, target1) => return 3
removeInstances(tpab, target2) => return 4
*/

/**
 * @param {array} tracklist
 * @param {string} target
 * @return {number}
 */

const removeTrackInstances = (tracklist, target) => {
  const start = 0;
  let currIdx = tracklist.length - 1;

  while (currIdx >= start) {
    if (tracklist[currIdx] === target) {
      tracklist.splice(currIdx, 1);
    }
    currIdx -= 1;
  }

  return tracklist.length;
};

export default removeTrackInstances;
