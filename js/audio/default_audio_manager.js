'use strict';

/**
 * The default version of the audio manager.
 */
class DefaultAudioManager {
  constructor() {
    this.audioContainers = {};

    var bulletSrc = 'assets_cc/audio/275151__bird-man__gun-shot.wav';
    var bulletNum = 4;
    this.bulletAudio = new MultiAudio(bulletSrc, bulletNum);

    var explosionSrc = 'assets_cc/audio/147583__cactus2003__far-off-boom-without-amplify.wav';
    var explosionNum = 4;
    this.explosionAudio = new MultiAudio(explosionSrc, explosionNum);

    this.rewardAudio = new SingleAudio('assets_cc/audio/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg');
    this.audioContainers[REWARD_AUDIO_PRIORITY] = this.rewardAudio;

    this.aggressiveUfoAudio = document.createElement('audio');
    this.aggressiveUfoAudio.src = 'assets_cc/audio/58015__guitarguy1985__yelp.wav';
    this.aggressiveUfoAudio.loop = true;

    this.passiveUfoAudio = document.createElement('audio');
    this.passiveUfoAudio.src = 'assets_cc/audio/27788__drni__roland-juno106-lfo-to-dco-sirene.wav';
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
