'use strict';

/**
 * The version of the audio manager with custom graphics.
 */
class DDAAudioManager {
  constructor() {
    this.audioContainers = {};

    this.rewardAudio = new ComboAudio([
      'assets_cc/audio/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg',
      'assets_dda/audio/good_s.mp3',
    ]);
    this.audioContainers[REWARD_AUDIO_PRIORITY] = this.rewardAudio;

    this.replayAudio = new SingleAudio('assets_dda/audio/lasttimeigave.mp3');
    this.audioContainers[REPLAY_AUDIO_PRIORITY] = this.replayAudio;

    this.aggressiveUfoAudio = document.createElement('audio');
    this.aggressiveUfoAudio.src = 'assets_dda/audio/Thunderstruck.mp3';

    this.passiveUfoAudio = document.createElement('audio');
    this.passiveUfoAudio.src = 'assets_dda/audio/300excerpt.mp3';
  }

  /**
   * Plays a sound when the player fires bullet.
   */
  playBulletSound() {
    // TODO: process loading correctly
    var audioFactory = new ConfigAudioFactory();
    if (configManager.isLoaded) {
      this.bulletAudio = audioFactory.audioFrom(configManager.audio.bullet);
    }
    this.bulletAudio.play();
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
