'use strict';

/**
 * The class to use for playing sounds.
 */
class Sounds {
  constructor() {
    this.selectManager();
  }

  /**
   * Selects the manager based on the current settings.
   */
  selectManager() {
    if (useCustomAssets) {
      this.innerAudioManager = this.getDdaManager();
    }
    else {
      this.innerAudioManager = this.getCleanManager();
    }
  }

  /**
   * Lazy loads the clean manager.
   * @return {object} The clean manager.
   */
  getCleanManager() {
    this.cleanManager = this.cleanManager || new CleanAudioManager();
    return this.cleanManager;
  }

  /**
   * Lazy loads the DDA manager.
   * @return {object} The DDA manager.
   */
  getDdaManager() {
    this.ddaManager = this.ddaManager || new DDAAudioManager();
    return this.ddaManager;
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
