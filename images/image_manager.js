'use strict';

/**
 * The object used for managing images.
 */
class ImageManager {
  constructor() {
    if (useCustomAssets) {
      this.innerImageManager = new DDAImageManager();
    }
    else {
      this.innerImageManager = new CleanImageManager();
    }
  }

  /**
   * Gets a random image for the big asteroid.
   * @return {object} an image.
   */
  getRandomBigAsteroidImage() {
    return this.innerImageManager.getRandomBigAsteroidImage();
  }

  /**
   * Gets a random image for the medium asteroid.
   * @return {object} an image.
   */
  getRandomMediumAsteroidImage() {
    return this.innerImageManager.getRandomMediumAsteroidImage();
  }

  /**
   * Gets a random image for the small asteroid.
   * @return {object} an image.
   */
  getRandomSmallAsteroidImage() {
    return this.innerImageManager.getRandomSmallAsteroidImage();
  }

  /**
   * Gets the image to show on the game over screen.
   * @return {object} the game over image.
   */
  getGameOverImage() {
    return this.innerImageManager.getGameOverImage();
  }
}
