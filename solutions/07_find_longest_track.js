/*
Given an object of track names and durations, write a function that returns the track name with the longest duration. Consider how you can convert the given durations into a format that will calculate correct comparisons.

Example:
const goodKidMaadCity = {
  "Sherane a.k.a. Master Splinter's Daughter": "4:34",
  "*****, Don't Kill My Vibe": "5:11",
  "Backseat Freestyle": "3:33",
  "The Art of Peer Pressure": "5:25",
  "Money Trees": "6:27",
  "Poetic Justice": "5:00",
  "good kid": "3:34",
  "m.A.A.d city": "5:50",
  "Swimming Pools (Drank) - Extended Version": "5:14",
  "Sing About Me, I'm Dying of Thirst": "12:04",
  "Real": "7:23",
  "Compton": "4:08"
};

const damn = {
  "BLOOD": "1:58",
  "DNA": "3:06",
  "YAH": "2:40",
  "ELEMENT": "3:29",
  "FEEL": "3:35",
  "LOYALTY": "3:47",
  "PRIDE": "4:35",
  "HUMBLE": "2:57",
  "LUST": "5:08",
  "LOVE": "3:33",
  "XXX": "4:14",
  "FEAR": "7:41",
  "GOD": "4:09",
  "DUCKWORTH": "4:09"
};

findLongestTrack(goodKidMaadCity); => return "Sing About Me, I'm Dying of Thirst"
findLongestTrack(damn); => return "FEAR"
*/

/**
 * @param {object} album
 * @return {string}
 */

const convertTimeToSeconds = timeString => (
  timeString.split(':')
    .reduce((min, sec) =>
      (Number(min) * 60) + Number(sec))
);

const findLongestTrack = (album) => {
  let currLongestDuration = Number.MIN_SAFE_INTEGER;
  let currLongestTrack;

  Object.entries(album).forEach((track) => {
    const [trackName, duration] = track;
    const currTrackDuration = convertTimeToSeconds(duration);

    if (currTrackDuration > currLongestDuration) {
      currLongestDuration = currTrackDuration;
      currLongestTrack = trackName;
    }
  });
  return currLongestTrack;
};

export default findLongestTrack;
