'use strict';

/**
 * The object that manages the death sounds.
 */
class DeathAudio extends RouletteAudio {
  constructor() {
    var audioSrcs = [
      'media/sounds/DDA/death/ah_s.mp3',
      'media/sounds/DDA/death/bobsaget.mp3',
      'media/sounds/DDA/death/FFFUUUU.mp3',
      'media/sounds/DDA/death/oh_s.mp3',
      'media/sounds/DDA/death/oh_s2.mp3',
      'media/sounds/DDA/death/THATSMY.mp3',
      'media/sounds/DDA/death/thehwasthat.mp3',
      'media/sounds/DDA/death/thisisbull.mp3',
    ];
    super(audioSrcs);
  }
}
