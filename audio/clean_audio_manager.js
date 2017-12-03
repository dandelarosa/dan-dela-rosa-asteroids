'use strict';

/**
 * The clean version of the audio manager.
 */
class CleanAudioManager {
  constructor() {
    this.bulletAudio = new BulletAudio();
    this.explosionAudio = new ExplosionAudio();

    this.rewardAudio = document.createElement('audio');
    this.rewardAudio.src = 'media/sounds/Universal/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg';
  }

  /**
   * Plays a sound when the player fires bullet.
   */
  playBulletSound() {
    this.bulletAudio.play();
  }

  /**
   * Plays a tiny explosion sound.
   */
  playExplosionSound() {
    this.explosionAudio.play();
  }

  /**
   * Plays a sound when the player's ship is destroyed.
   */
  playPlayerDeathSound() {
  }

  /**
   * Plays a sound when an asteroid is destroyed.
   */
  playAsteroidDeathSound() {
  }

  /**
   * Plays a sound when a UFO appears.
   * @param {boolean} isAggressive - determines which variant of the sound to play.
   */
  playUFOSpawnSound(isAggressive) {
    // TODO: implement (requires refactoring)
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
    // TODO: implement (requires refactoring)
  }

  /**
   * Plays a sound when a UFO is destroyed.
   */
  playUFODeathSound() {
  }

  /**
   * Plays a sound when the player earns an extra life.
   */
  playBonusSound() {
    this.rewardAudio.play();
  }

  /**
   * Plays a sound when the game over screen appears.
   */
  playGameOverSound() {
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
  }
}
