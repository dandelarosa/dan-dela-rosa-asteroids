'use strict';

/**
 * An object that plays a different sound each time it is invoked.
 */
class RouletteAudio {
  /**
   * @param {string[]} audioSrcs - An array of sound file URLs.
   */
  constructor(audioSrcs) {
    this.audioElements = [];
    for (var i = 0; i < audioSrcs.length; i++) {
      var audio = document.createElement('audio');
      audio.src = audioSrcs[i];
      this.audioElements.push(audio);
    }
  }

  /**
   * Plays an audio element.
   */
  play() {
    // If the RNG picked a sound that's already playing, keep trying until it's found one that's available.
    var selectedAvailableSound = false;
    while(!selectedAvailableSound) {
      var i = Math.floor(Math.random() * this.audioElements.length);
      var audio = this.audioElements[i];
      if (audio.currentTime === 0 || audio.ended) {
        selectedAvailableSound = true;
        audio.play();
      }
    }
  }

  /**
   * Checks if the sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isPlaying() {
    return this.isAnyPlaying();
  }

  /**
   * Checks if any sounds in this group are playing.
   * @return {boolean} true if any sounds are playing, or false if none are playing.
   */
  isAnyPlaying() {
    for (var i = 0; i < this.audioElements.length; i++) {
      var audioElement = this.audioElements[i];
      if (isAudioPlaying(audioElement)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Stops playing the audio element.
   */
  stop() {
    this.stopAll();
  }

  /**
   * Stops playing all sounds in this group.
   */
  stopAll() {
    for (var i = 0; i < this.audioElements.length; i++) {
      var audioElement = this.audioElements[i];
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  }
}
