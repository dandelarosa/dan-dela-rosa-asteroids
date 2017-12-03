'use strict';

/**
 * The class to use for playing sounds.
 */
class Sounds {
  constructor() {
    if (useCustomAssets) {
      this.innerAudioManager = new DDAAudioManager();
    }
    else {
      this.innerAudioManager = new CleanAudioManager();
    }
  }

  /**
   * Plays a sound when the player fires bullet.
   */
  playBulletSound() {
    this.innerAudioManager.playBulletSound();
  }

  /**
   * Plays a tiny explosion sound.
   */
  playExplosionSound() {
    this.innerAudioManager.playExplosionSound();
  }

  /**
   * Plays a sound when the player's ship is destroyed.
   */
  playPlayerDeathSound() {
    this.innerAudioManager.playPlayerDeathSound();
  }

  /**
   * Plays a sound when an asteroid is destroyed.
   */
  playAsteroidDeathSound() {
    this.innerAudioManager.playAsteroidDeathSound();
  }

  /**
   * Plays a sound when a UFO appears.
   * @param {boolean} isAggressive - determines which variant of the sound to play.
   */
  playUFOSpawnSound(isAggressive) {
    this.innerAudioManager.playUFOSpawnSound(isAggressive);
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
    this.innerAudioManager.stopUFOSpawnSound();
  }

  /**
   * Plays a sound when a UFO is destroyed.
   */
  playUFODeathSound() {
    this.innerAudioManager.playUFODeathSound();
  }

  /**
   * Plays a sound when the player earns an extra life.
   */
  playBonusSound() {
    this.innerAudioManager.playBonusSound();
  }

  /**
   * Plays a sound when the game over screen appears.
   */
  playGameOverSound() {
    this.innerAudioManager.playGameOverSound();
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
    this.innerAudioManager.playReplaySound();
  }
}
