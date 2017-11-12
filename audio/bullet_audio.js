'use strict';

/**
 * The object that manages the bullet sounds.
 */
class BulletAudio extends MultiAudio {
  constructor() {
    var audioSrc = 'media/sounds/Universal/275151__bird-man__gun-shot.wav';
    var numElements = 4;
    super(audioSrc, numElements);
  }
}
