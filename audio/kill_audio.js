'use strict';

/**
 * The object that manages the death sounds.
 */
class KillAudio extends RouletteAudio {
  constructor() {
    var audioSrcs = [
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
    ];
    super(audioSrcs);
  }
}
