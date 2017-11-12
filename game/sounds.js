'use strict';

/**
 * The class to use for playing sounds.
 */
class Sounds {
  constructor() {
    this.bulletAudio = new BulletAudio();
    this.explosionAudio = new ExplosionAudio();
    this.deathAudio = new DeathAudio();
    this.killAudio = new KillAudio();
    this.ufoDeathAudio = new UFODeathAudio();
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
    this.deathAudio.play();
  }

  /**
   * Plays a sound when an asteroid is destroyed.
   */
  playAsteroidDeathSound() {
    this.killAudio.play();
  }

  /**
   * Plays a sound when a UFO appears.
   * @param {boolean} isAggressive - determines which variant of the sound to play.
   */
  playUFOSpawnSound(isAggressive) {
    if (isAggressive) {
      playSoundWithId('thunderstruck');
    }
    else {
      playSoundWithId('300');
    }
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
  }

  /**
   * Plays a sound when a UFO is destroyed.
   */
  playUFODeathSound() {
    this.ufoDeathAudio.play();
  }

  /**
   * Plays a sound when the player earns an extra life.
   */
  playBonusSound() {
    playSoundWithId('reward');
    playSoundWithId('good_s');
  }

  /**
   * Plays a sound when the game over screen appears.
   */
  playGameOverSound() {
    playSoundWithId('ah_s');
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
    playSoundWithId('lasttimeigave');
  }
}
