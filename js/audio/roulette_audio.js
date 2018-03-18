'use strict';

/**
 * An object that plays a different sound each time it is invoked.
 */
class RouletteAudio {
  /**
   * @param {string[]} audioSrcs - An array of sound file URLs.
   */
  constructor(audioSrcs) {
    this.audios = [];
    for (var i = 0; i < audioSrcs.length; i++) {
      var src = audioSrcs[i];
      var audio = new SingleAudio(src);
      this.audios.push(audio);
    }
    this.previouslyPlayedIndex = undefined;
  }

  /**
   * Plays an audio element.
   */
  play() {
    if (this.isAnyPlaying()) {
      return;
    }
    var selectedIndex = Math.floor(Math.random() * this.audios.length);
    while (selectedIndex === this.previouslyPlayedIndex) {
      selectedIndex = Math.floor(Math.random() * this.audios.length);
    }
    this.audios[selectedIndex].play();
    this.previouslyPlayedIndex = selectedIndex;
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
    this.stopAll();
  }

  /**
   * Stops playing all sounds in this group.
   */
  stopAll() {
    for (var i = 0; i < this.audios.length; i++) {
      var audio = this.audios[i];
      audio.stop();
    }
  }
}
