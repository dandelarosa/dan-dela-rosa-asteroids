'use strict';

/**
 * The object that manages the UFO spawn sounds.
 */
class UFOAudio {
  /**
   * @param {string} audioSrc - The URL of the audio file.
   * @param {number} numElements - The number of elements to contain.
   */
  constructor(audioSrc, numElements) {
    // There should be two separate objects for the clean audio and the DDA version
    this.cleanAggressiveAudio = document.createElement('audio');
    this.cleanAggressiveAudio.src = 'media/sounds/Clean/58015__guitarguy1985__yelp.wav';
    this.cleanAggressiveAudio.loop = true;

    this.cleanPassiveAudio = document.createElement('audio');
    this.cleanPassiveAudio.src = 'media/sounds/Clean/27788__drni__roland-juno106-lfo-to-dco-sirene.wav';
    this.cleanPassiveAudio.loop = true;

    this.ddaAggressiveAudio = document.createElement('audio');
    this.ddaAggressiveAudio.src = 'media/sounds/DDA/Thunderstruck.mp3';

    this.ddaPassiveAudio = document.createElement('audio');
    this.ddaPassiveAudio.src = 'media/sounds/DDA/300excerpt.mp3';
  }

  /**
   * Plays an audio element.
   * @param {boolean} isAggressive - Whether the audio is for an aggressive UFO.
   */
  play(isAggressive) {
    if (isAggressive) {
      this.ddaAggressiveAudio.play();
    }
    else {
      this.ddaPassiveAudio.play();
    }
  }

  /**
   * Stops playing the active audio track.
   */
  stop() {
    // Right now there's no way of knowing which track is playing so just stop all of them.
    this.cleanAggressiveAudio.pause();
    this.cleanAggressiveAudio.currentTime = 0;

    this.cleanPassiveAudio.pause();
    this.cleanPassiveAudio.currentTime = 0;

    this.ddaAggressiveAudio.pause();
    this.ddaAggressiveAudio.currentTime = 0;

    this.ddaPassiveAudio.pause();
    this.ddaPassiveAudio.currentTime = 0;
  }
}
