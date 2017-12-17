'use strict';

const REPLAY_AUDIO_PRIORITY = 1;
const GAME_OVER_AUDIO_PRIORITY = 2;
const REWARD_AUDIO_PRIORITY = 3;
const PLAYER_DEATH_AUDIO_PRIORITY = 4;
const UFO_DEATH_AUDIO_PRIORITY = 5;
const ASTEROID_DEATH_AUDIO_PRIORITY = 6;
const AUDIO_PRIORITY_COUNT = 7;

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
    this.playSoundWithPriority(GAME_OVER_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound when the game is played after a game over.
   */
  playReplaySound() {
    this.playSoundWithPriority(REPLAY_AUDIO_PRIORITY);
  }

  /**
   * Plays a sound with the selected priority.
   * @param {number} selectedPriority - The priority level for selecting a sound.
   */
  playSoundWithPriority(selectedPriority) {
    for (var i = 0; i < AUDIO_PRIORITY_COUNT; i++) {
      var audioContainer = this.innerManager.audioContainers[i];
      if (!audioContainer) {
        continue;
      }

      if (selectedPriority < i) {
        audioContainer.stop();
      }
      else if (selectedPriority === i) {
        audioContainer.play();
      }

      if (selectedPriority > i) {
        if (audioContainer.isPlaying()) {
          return;
        }
      }
    }
  }
}
