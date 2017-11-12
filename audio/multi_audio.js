'use strict';

/**
 * An object that can play multiple instances of a sound simultaneously.
 */
class MultiAudio {
  /**
   * @param {string} audioSrc - The URL of the audio file.
   * @param {number} numElements - The number of elements to contain.
   */
  constructor(audioSrc, numElements) {
    this.audioElements = [];
    this.currentIndex = 0;
    for (var i = 0; i < numElements; i++) {
      var audio = document.createElement('audio');
      audio.src = audioSrc;
      this.audioElements.push(audio);
    }
  }

  /**
   * Plays an audio element.
   */
  play() {
    var audio = this.audioElements[this.currentIndex];
    audio.play();
    if (this.currentIndex > this.audioElements.length - 2) {
      this.currentIndex = 0;
    }
    else {
      this.currentIndex++;
    }
  }
}
