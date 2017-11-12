'use strict';

/**
 * The object that manages the death sounds.
 */
class UFODeathAudio extends RouletteAudio {
  constructor() {
    var audioSrcs = [
      'media/sounds/DDA/ufo/200lbs.mp3',
      'media/sounds/DDA/ufo/cantdo.mp3',
      'media/sounds/DDA/ufo/hesan.mp3',
      'media/sounds/DDA/ufo/jollypiratedonut.mp3',
      'media/sounds/DDA/ufo/walkamile.mp3',
    ];
    super(audioSrcs);
  }
}
