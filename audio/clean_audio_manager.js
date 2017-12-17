'use strict';

/**
 * The clean version of the audio manager.
 */
class CleanAudioManager {
  constructor() {
    this.audioContainers = {};

    var bulletSrc = 'media/sounds/Universal/275151__bird-man__gun-shot.wav';
    var bulletNum = 4;
    this.bulletAudio = new MultiAudio(bulletSrc, bulletNum);

    var explosionSrc = 'media/sounds/Universal/147583__cactus2003__far-off-boom-without-amplify.wav';
    var explosionNum = 4;
    this.explosionAudio = new MultiAudio(explosionSrc, explosionNum);

    this.rewardAudio = new SingleAudio('media/sounds/Universal/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg');
    this.audioContainers[REWARD_AUDIO_PRIORITY] = this.rewardAudio;

    this.aggressiveUfoAudio = document.createElement('audio');
    this.aggressiveUfoAudio.src = 'media/sounds/Clean/58015__guitarguy1985__yelp.wav';
    this.aggressiveUfoAudio.loop = true;

    this.passiveUfoAudio = document.createElement('audio');
    this.passiveUfoAudio.src = 'media/sounds/Clean/27788__drni__roland-juno106-lfo-to-dco-sirene.wav';
    this.passiveUfoAudio.loop = true;
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
   * Stops the player death sound.
   */
  stopPlayerDeathSound() {
  }

  /**
   * Checks if the player death sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isPlayerDeathSoundPlaying() {
    return false;
  }

  /**
   * Plays a sound when an asteroid is destroyed.
   */
  playAsteroidDeathSound() {
  }

  /**
   * Stops the asteroid death sound.
   */
  stopAsteroidDeathSound() {
  }

  /**
   * Checks if the asteroid death sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isAsteroidDeathSoundPlaying() {
    return false;
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
  }

  /**
   * Stops the UFO death sound.
   */
  stopUFODeathSound() {
  }

  /**
   * Checks if the UFO death sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isUFODeathSoundPlaying() {
    return false;
  }

  /**
   * Plays a sound when the player earns an extra life.
   */
  playBonusSound() {
    this.rewardAudio.play();
  }

  /**
   * Stops the bonus sound.
   */
  stopBonusSound() {
    this.rewardAudio.stop();
  }

  /**
   * Checks if the bonus sound is playing.
   * @return {boolean} true if the sound is playing, or false if is not playing.
   */
  isBonusSoundPlaying() {
    return this.rewardAudio.isPlaying();
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
