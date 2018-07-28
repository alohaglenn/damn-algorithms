/*
Eight months after "DAMN" was released, Kendrick Lamar released "DAMN COLLECTOR'S EDITION" which contained the exact same tracks, but with the album order reversed.

Given an array of track names as strings, reverse the elements in the array in-place.

You must modify the input array on the fly. Don't create any additional arrays and don't use JavaScript's Array.prototype.reverse() method.

Example:
const albumTracks = ['BLOOD', 'DNA', 'YAH', 'ELEMENT', 'FEEL', 'LOYALTY', 'PRIDE', 'HUMBLE', 'LUST', 'LOVE', 'XXX', 'FEAR', 'GOD', 'DUCKWORTH'];
reverseTracksInPlace(albumTracks) => return ['DUCKWORTH', 'GOD', 'FEAR', 'XXX', 'LOVE', 'LUST', 'HUMBLE', 'PRIDE', 'LOYALTY','FEEL', 'ELEMENT', 'YAH', 'DNA', 'BLOOD']
*/

/**
 * @param {array} tracks
 * @return {array}
 */

const reverseTracksInPlace = (tracks) => {
  let left = 0;
  let right = tracks.length - 1;

  while (left < right) {
    [tracks[left], tracks[right]] = [tracks[right], tracks[left]];
    left += 1;
    right -= 1;
  }

  return tracks;
};

export default reverseTracksInPlace;
