'use strict';

/**
 * The version of the audio manager with custom graphics.
 */
class DDAAudioManager {
  constructor() {
    this.audioContainers = {};

    var bulletSrc = 'assets_cc/audio/275151__bird-man__gun-shot.wav';
    var bulletNum = 4;
    this.bulletAudio = new MultiAudio(bulletSrc, bulletNum);

    var explosionSrc = 'assets_cc/audio/147583__cactus2003__far-off-boom-without-amplify.wav';
    var explosionNum = 4;
    this.explosionAudio = new MultiAudio(explosionSrc, explosionNum);

    this.deathAudio = new RouletteAudio([
      'assets_dda/audio/death/ah_s.mp3',
      'assets_dda/audio/death/bobsaget.mp3',
      'assets_dda/audio/death/FFFUUUU.mp3',
      'assets_dda/audio/death/oh_s.mp3',
      'assets_dda/audio/death/oh_s2.mp3',
      'assets_dda/audio/death/THATSMY.mp3',
      'assets_dda/audio/death/thehwasthat.mp3',
      'assets_dda/audio/death/thisisbull.mp3',
    ]);
    this.audioContainers[PLAYER_DEATH_AUDIO_PRIORITY] = this.deathAudio;

    this.killAudio = new RouletteAudio([
      'assets_dda/audio/kill/balls.mp3',
      'assets_dda/audio/kill/b1.mp3',
      'assets_dda/audio/kill/b2.mp3',
      'assets_dda/audio/kill/bs.mp3',
      'assets_dda/audio/kill/d.mp3',
      'assets_dda/audio/kill/f.mp3',
      'assets_dda/audio/kill/fu.mp3',
      'assets_dda/audio/kill/hs.mp3',
      'assets_dda/audio/kill/motherlovers.mp3',
      'assets_dda/audio/kill/p.mp3',
    ]);
    this.audioContainers[ASTEROID_DEATH_AUDIO_PRIORITY] = this.killAudio;

    this.ufoDeathAudio = new RouletteAudio([
      'assets_dda/audio/ufo/200lbs.mp3',
      'assets_dda/audio/ufo/cantdo.mp3',
      'assets_dda/audio/ufo/hesan.mp3',
      'assets_dda/audio/ufo/jollypiratedonut.mp3',
      'assets_dda/audio/ufo/walkamile.mp3',
    ]);
    this.audioContainers[UFO_DEATH_AUDIO_PRIORITY] = this.ufoDeathAudio;

    this.gameOverAudio = new RouletteAudio([
      'assets_dda/audio/olololol.mp3',
      'assets_dda/audio/yousinme.mp3',
    ]);
    this.audioContainers[GAME_OVER_AUDIO_PRIORITY] = this.gameOverAudio;

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
