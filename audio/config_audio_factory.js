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
    else if (configObject.class === 'RouletteAudio') {
      var srcs = configObject.srcs;
      var audio = new RouletteAudio(srcs);
      return audio;
    }
    else if (configObject.class === 'ComboAudio') {
      var srcs = configObject.srcs;
      var audio = new ComboAudio(srcs);
      return audio;
    }
    else if (configObject.class === 'SingleAudio') {
      var src = configObject.src;
      var audio = new SingleAudio(src);
      return audio;
    }
    return null;
  }
}
