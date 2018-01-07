'use strict';

/**
 * A factory for creating audio objects from config objects.
 */
class ConfigAudioFactory {
  constructor() {
  }

  /**
   * Creates an audio object.
   * @param {Object} configObject - The object used for configuring the audio.
   * @return {Object} - The generated audio object.
   */
  audioFrom(configObject) {
    if (configObject.class === 'MultiAudio') {
      var src = configObject.src;
      var numElements = configObject.numElements;
      var audio = new MultiAudio(src, numElements);
      return audio;
    }
    return null;
  }
}
