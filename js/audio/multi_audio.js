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
    this.audios = [];
    this.currentIndex = 0;
    for (var i = 0; i < numElements; i++) {
      var audio = new SingleAudio(audioSrc);
      this.audios.push(audio);
    }
  }

  /**
   * Plays an audio element.
   */
  play() {
    var audio = this.audios[this.currentIndex];
    if (audio.isPlaying()) {
      audio.stop();
    }
    audio.play();
    if (this.currentIndex > this.audios.length - 2) {
      this.currentIndex = 0;
    }
    else {
      this.currentIndex++;
    }
  }
}
