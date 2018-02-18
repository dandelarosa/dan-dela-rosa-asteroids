'use strict';

/**
 * The version of the audio manager with custom graphics.
 */
class DDAAudioManager {
  constructor() {
  }

  /**
   * Plays a sound when the player fires bullet.
   */
  playBulletSound() {
    // TODO: process loading correctly
    var audioFactory = new ConfigAudioFactory();
    if (configManager.isLoaded) {
      this.bulletAudio = audioFactory.audioFrom(configManager.audio.bullet);
    }
    this.bulletAudio.play();
  }
}
