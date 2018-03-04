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
  }

  /**
   * Queries the system for the currently selected manager.
   * @return {object} The manager that should be used.
   */
  getCurrentManager() {
    if (configManager.isLoaded && !forceDefaultAssets) {
      return configAudioManager;
    }
    else {
      return this.getCleanManager();
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
   * Plays a sound when the player fires bullet.
   */
  playBulletSound() {
    this.getCurrentManager().playBulletSound();
  }

  /**
   * Plays a tiny explosion sound.
   */
  playExplosionSound() {
    this.getCurrentManager().playExplosionSound();
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
    this.getCurrentManager().playUFOSpawnSound(isAggressive);
  }

  /**
   * Stops playing the UFO sound.
   */
  stopUFOSpawnSound() {
    this.getCurrentManager().stopUFOSpawnSound();
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
      var audioContainer = this.getCurrentManager().audioContainers[i];
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
