'use strict';

const REWARD_AUDIO_PRIORITY = 1;
const PLAYER_DEATH_AUDIO_PRIORITY = 2;
const UFO_DEATH_AUDIO_PRIORITY = 3;
const ASTEROID_DEATH_AUDIO_PRIORITY = 4;

/**
 * The class to use for playing sounds.
 */
class AudioManager {
  constructor() {
    this.selectManager();
  }

  /**
   * Selects the manager based on the current settings.
   */
  selectManager() {
    if (useCustomAssets) {
      this.innerManager = this.getDdaManager();
    }
    else {
      this.innerManager = this.getCleanManager();
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
    this.innerManager.playBulletSound();
  }

  /**
   * Plays a tiny explosion sound.
   */
  playExplosionSound() {
    this.innerManager.playExplosionSound();
  }

  /**
   * Plays a sound when the player's ship is destroyed.
   */
  playPlayerDeathSound() {
    this.playSoundWithPriority(PLAYER_DEATH_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound when an asteroid is destroyed.
   */
  playAsteroidDeathSound() {
    this.playSoundWithPriority(ASTEROID_DEATH_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound when a UFO appears.
   * @param {boolean} isAggressive - determines which variant of the sound to play.
   */
  playUFOSpawnSound(isAggressive) {
    this.innerManager.playUFOSpawnSound(isAggressive);
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
    this.innerManager.stopUFOSpawnSound();
  }

  /**
   * Plays a sound when a UFO is destroyed.
   */
  playUFODeathSound() {
    this.playSoundWithPriority(UFO_DEATH_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound when the player earns an extra life.
   */
  playBonusSound() {
    this.playSoundWithPriority(REWARD_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound when the game over screen appears.
   */
  playGameOverSound() {
    this.innerManager.playGameOverSound();
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
    this.innerManager.playReplaySound();
  }

  /**
   * Plays a sound with the selected priority.
   * @param {number} selectedPriority - The priority level for selecting a sound.
   */
  playSoundWithPriority(selectedPriority) {
    if (selectedPriority < REWARD_AUDIO_PRIORITY) {
      this.innerManager.stopBonusSound();
    }
    else if (selectedPriority === REWARD_AUDIO_PRIORITY) {
      this.innerManager.playBonusSound();
    }
    if (selectedPriority > REWARD_AUDIO_PRIORITY) {
      if (this.innerManager.isBonusSoundPlaying()) {
        return;
      }
    }

    if (selectedPriority < PLAYER_DEATH_AUDIO_PRIORITY) {
      this.innerManager.stopPlayerDeathSound();
    }
    else if (selectedPriority === PLAYER_DEATH_AUDIO_PRIORITY) {
      this.innerManager.playPlayerDeathSound();
    }
    if (selectedPriority > PLAYER_DEATH_AUDIO_PRIORITY) {
      if (this.innerManager.isPlayerDeathSoundPlaying()) {
        return;
      }
    }

    if (selectedPriority < UFO_DEATH_AUDIO_PRIORITY) {
      this.innerManager.stopUFODeathSound();
    }
    else if (selectedPriority === UFO_DEATH_AUDIO_PRIORITY) {
      this.innerManager.playUFODeathSound();
    }
    if (selectedPriority > UFO_DEATH_AUDIO_PRIORITY) {
      if (this.innerManager.isUFODeathSoundPlaying()) {
        return;
      }
    }

    if (selectedPriority < ASTEROID_DEATH_AUDIO_PRIORITY) {
      this.innerManager.stopAsteroidDeathSound();
    }
    else if (selectedPriority === ASTEROID_DEATH_AUDIO_PRIORITY) {
      this.innerManager.playAsteroidDeathSound();
    }
    if (selectedPriority > ASTEROID_DEATH_AUDIO_PRIORITY) {
      if (this.innerManager.isAsteroidDeathSoundPlaying()) {
        return;
      }
    }
  }
}
