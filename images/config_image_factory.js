'use strict';

/**
 * A factory for creating image objects from config objects.
 */
class ConfigImageFactory {
  constructor() {
  }

  /**
   * Creates an image object.
   * @param {Object} configObject - The object used for configuring the image.
   * @return {Object} - The generated image object.
   */
  imageFrom(configObject) {
    if (configObject.class === 'SingleImageContainer') {
      var src = configObject.src;
      var offsetX = configObject.offsetX;
      var offsetY = configObject.offsetY;
      var image = new SingleImageContainer(src, offsetX, offsetY);
      return image;
    }
    else if (configObject.class === 'RouletteImageContainer') {
      var configs = configObject.configs;
      var image = new RouletteImageContainer(configs);
      return image;
    }
    return null;
  }
}
