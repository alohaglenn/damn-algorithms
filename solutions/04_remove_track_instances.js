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
  for (let i = tracklist.length - 1; i >= 0; i--) {
    if (tracklist[i] === target) {
      tracklist.splice(i, 1);
    }
  }

  return tracklist.length;
};

export default removeTrackInstances;
