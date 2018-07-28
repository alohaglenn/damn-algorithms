/* Given two lists 'a' and 'b' that have the same tracks but in a different order, find the index mapping from 'a' to 'b'. An index mapping means that the ith element in 'a' appears at the jth element in 'b'.

Example:
const a = ['DNA', 'LOYALTY', 'HUMBLE', 'GOD', 'DUCKWORTH'];
const b = ['LOYALTY', 'DUCKWORTH', 'HUMBLE', 'DNA', 'GOD'];

findIndexMapping(a, b) => return [3, 0, 2, 4, 1]

  Index Mapping:
  'DNA'       = index 0 in 'a', index 3 in 'b'
  'LOYALTY'   = index 1 in 'a', index 0 in 'b'
  'HUMBLE'    = index 2 in 'a', index 2 in 'b'
  'GOD'       = index 3 in 'a', index 4 in 'b'
  'DUCKWORTH' = index 4 in 'a', index 1 in 'b'
*/

/**
 * @param  {array} a
 * @param  {array} b
 * @return {array}
 */

const findIndexMapping = (a, b) => a.map(track => b.indexOf(track));

export default findIndexMapping;
