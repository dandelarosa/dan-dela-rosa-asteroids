'use strict';

/**
 * The version of the audio manager with custom graphics.
 */
class DDAAudioManager {
  constructor() {
    this.audioContainers = {};

    var bulletSrc = 'media/sounds/Universal/275151__bird-man__gun-shot.wav';
    var bulletNum = 4;
    this.bulletAudio = new MultiAudio(bulletSrc, bulletNum);

    var explosionSrc = 'media/sounds/Universal/147583__cactus2003__far-off-boom-without-amplify.wav';
    var explosionNum = 4;
    this.explosionAudio = new MultiAudio(explosionSrc, explosionNum);

    this.deathAudio = new RouletteAudio([
      'media/sounds/DDA/death/ah_s.mp3',
      'media/sounds/DDA/death/bobsaget.mp3',
      'media/sounds/DDA/death/FFFUUUU.mp3',
      'media/sounds/DDA/death/oh_s.mp3',
      'media/sounds/DDA/death/oh_s2.mp3',
      'media/sounds/DDA/death/THATSMY.mp3',
      'media/sounds/DDA/death/thehwasthat.mp3',
      'media/sounds/DDA/death/thisisbull.mp3',
    ]);
    this.audioContainers[PLAYER_DEATH_AUDIO_PRIORITY] = this.deathAudio;

    this.killAudio = new RouletteAudio([
      'media/sounds/DDA/kill/balls.mp3',
      'media/sounds/DDA/kill/b1.mp3',
      'media/sounds/DDA/kill/b2.mp3',
      'media/sounds/DDA/kill/bs.mp3',
      'media/sounds/DDA/kill/d.mp3',
      'media/sounds/DDA/kill/f.mp3',
      'media/sounds/DDA/kill/fu.mp3',
      'media/sounds/DDA/kill/hs.mp3',
      'media/sounds/DDA/kill/motherlovers.mp3',
      'media/sounds/DDA/kill/p.mp3',
    ]);
    this.audioContainers[ASTEROID_DEATH_AUDIO_PRIORITY] = this.killAudio;

    this.ufoDeathAudio = new RouletteAudio([
      'media/sounds/DDA/ufo/200lbs.mp3',
      'media/sounds/DDA/ufo/cantdo.mp3',
      'media/sounds/DDA/ufo/hesan.mp3',
      'media/sounds/DDA/ufo/jollypiratedonut.mp3',
      'media/sounds/DDA/ufo/walkamile.mp3',
    ]);
    this.audioContainers[UFO_DEATH_AUDIO_PRIORITY] = this.ufoDeathAudio;

    this.gameOverAudio = new RouletteAudio([
      'media/sounds/DDA/olololol.mp3',
      'media/sounds/DDA/yousinme.mp3',
    ]);
    this.audioContainers[GAME_OVER_AUDIO_PRIORITY] = this.gameOverAudio;

    this.rewardAudio = new ComboAudio([
      'media/sounds/Universal/234924__gordeszkakerek__pick-up-or-found-it-secret-item.ogg',
      'media/sounds/DDA/good_s.mp3',
    ]);
    this.audioContainers[REWARD_AUDIO_PRIORITY] = this.rewardAudio;

    this.replayAudio = new SingleAudio('media/sounds/DDA/lasttimeigave.mp3');
    this.audioContainers[REPLAY_AUDIO_PRIORITY] = this.replayAudio;

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
