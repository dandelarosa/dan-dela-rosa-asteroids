'use strict';

/**
 * The version of the audio manager that uses config.json to play custom sounds.
 */
class ConfigAudioManager {
  constructor() {
    this.factory = new ConfigAudioFactory();
    // Will remove when own class is fully implemented
    this.ddaManager = new DDAAudioManager();
    this.aggressiveUfoAudio = this.ddaManager.aggressiveUfoAudio;
    this.passiveUfoAudio = this.ddaManager.passiveUfoAudio;
    this.audioContainers = this.ddaManager.audioContainers;
  }

  /**
   * Loads the sounds once config.json has been loaded.
   */
  loadConfig() {
    this.bulletAudio = this.factory.audioFrom(configManager.audio.bullet);
    this.explosionAudio = this.factory.audioFrom(configManager.audio.explosion);
    this.audioContainers[PLAYER_DEATH_AUDIO_PRIORITY] = this.factory.audioFrom(configManager.audio.death);
    this.audioContainers[ASTEROID_DEATH_AUDIO_PRIORITY] = this.factory.audioFrom(configManager.audio.kill);
    this.audioContainers[UFO_DEATH_AUDIO_PRIORITY] = this.factory.audioFrom(configManager.audio.ufoDeath);
    this.audioContainers[GAME_OVER_AUDIO_PRIORITY] = this.factory.audioFrom(configManager.audio.gameOver);
    this.audioContainers[REWARD_AUDIO_PRIORITY] = this.factory.audioFrom(configManager.audio.reward);
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
}
