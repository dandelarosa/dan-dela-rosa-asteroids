'use strict';

/**
 * The object that manages the explosion sounds.
 */
class ExplosionAudio extends MultiAudio {
  constructor() {
    var audioSrc = 'media/sounds/Universal/147583__cactus2003__far-off-boom-without-amplify.wav';
    var numElements = 4;
    super(audioSrc, numElements);
  }
}
