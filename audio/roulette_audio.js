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
}
