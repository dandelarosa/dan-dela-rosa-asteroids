'use strict';

/**
 * The object that manages the death sounds.
 */
class GameOverAudio extends RouletteAudio {
  constructor() {
    var audioSrcs = [
      'media/sounds/DDA/olololol.mp3',
      'media/sounds/DDA/yousinme.mp3',
    ];
    super(audioSrcs);
  }
}
