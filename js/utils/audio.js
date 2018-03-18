/**
 * Checks if the audio element is playing.
 * @param {object} audioElement - The <audio> element.
 * @return {boolean} true if the audio is playing, false if it is not.
 */
function isAudioPlaying(audioElement) {
  return audioElement
  && audioElement.currentTime > 0
  && !audioElement.paused
  && !audioElement.ended
  && audioElement.readyState > 2;
}
