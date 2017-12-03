'use strict';

/**
 * The version of the audio manager with custom graphics.
 */
class DDAAudioManager {
  constructor() {
    this.bulletAudio = new BulletAudio();
    this.explosionAudio = new ExplosionAudio();
    this.deathAudio = new DeathAudio();
    this.killAudio = new KillAudio();
    this.ufoDeathAudio = new UFODeathAudio();
    this.gameOverAudio = new GameOverAudio();

    this.rewardAudio = document.createElement('audio');
    this.rewardAudio.src = 'media/sounds/Universal/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg';

    this.rewardAudio2 = document.createElement('audio');
    this.rewardAudio2.src = 'media/sounds/DDA/good_s.mp3';

    this.replayAudio = document.createElement('audio');
    this.replayAudio.src = 'media/sounds/DDA/lasttimeigave.mp3';

    this.aggressiveUfoAudio = document.createElement('audio');
    this.aggressiveUfoAudio.src = 'media/sounds/DDA/Thunderstruck.mp3';

    this.passiveUfoAudio = document.createElement('audio');
    this.passiveUfoAudio.src = 'media/sounds/DDA/300excerpt.mp3';
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
      this.aggressiveUfoAudio.play();
    }
    else {
      this.passiveUfoAudio.play();
    }
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
    // Right now there's no way of knowing which track is playing so just stop all of them.
    this.aggressiveUfoAudio.pause();
    this.aggressiveUfoAudio.currentTime = 0;

    this.passiveUfoAudio.pause();
    this.passiveUfoAudio.currentTime = 0;
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
    this.rewardAudio.play();
    // Play this only in the DDA soundpack
    this.rewardAudio2.play();
  }

  /**
   * Plays a sound when the game over screen appears.
   */
  playGameOverSound() {
    this.gameOverAudio.play();
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
    this.replayAudio.play();
  }
}
