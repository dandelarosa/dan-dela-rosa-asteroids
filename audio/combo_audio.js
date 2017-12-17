'use strict';

/**
 * An object for playing multiple unique sounds at once.
 */
class ComboAudio {
  /**
   * @param {string[]} srcs - A list of audio URLs.
   */
  constructor(srcs) {
    this.audios = [];
    for (var i = 0; i < srcs.length; i++) {
      var src = srcs[i];
      var audio = new SingleAudio(src);
      this.audios.push(audio);
    }
  }

  /**
   * Plays the audio element.
   */
  play() {
    for (var i = 0; i < this.audios.length; i++) {
      var audio = this.audios[i];
      audio.play();
    }
  }

  /**
   * Checks if the sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isPlaying() {
    for (var i = 0; i < this.audios.length; i++) {
      var audio = this.audios[i];
      if (audio.isPlaying()) {
        return true;
      }
    }
    return false;
  }

  /**
   * Stops playing the audio element.
   */
  stop() {
    for (var i = 0; i < this.audios.length; i++) {
      var audio = this.audios[i];
      audio.stop();
    }
  }
}
