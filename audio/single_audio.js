'use strict';

/**
 * A wrapper object around a single audio element.
 */
class SingleAudio {
  /**
   * @param {string} src - The source URL of the audio.
   */
  constructor(src) {
    this.audioElement = document.createElement('audio');
    this.audioElement.src = src;
  }

  /**
   * Plays the audio element.
   */
  play() {
    this.audioElement.play();
  }

  /**
   * Checks if the sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isPlaying() {
    return isAudioPlaying(this.audioElement);
  }

  /**
   * Stops playing the audio element.
   */
  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }
}
