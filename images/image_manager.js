'use strict';

/**
 * The object used for managing images.
 */
class ImageManager {
  constructor() {
    this.selectManager();
  }

  /**
   * Selects the manager based on the current settings.
   */
  selectManager() {
    if (useCustomAssets) {
      this.innerImageManager = this.getDdaManager();
    }
    else {
      this.innerImageManager = this.getCleanManager();
    }
  }

  /**
   * Lazy loads the clean manager.
   * @return {object} The clean manager.
   */
  getCleanManager() {
    this.cleanManager = this.cleanManager || new CleanImageManager();
    return this.cleanManager;
  }

  /**
   * Lazy loads the DDA manager.
   * @return {object} The DDA manager.
   */
  getDdaManager() {
    this.ddaManager = this.ddaManager || new DDAImageManager();
    return this.ddaManager;
  }

  /**
   * Gets the player ship's image.
   * @return {object} the ship image.
   */
  getPlayerShipImage() {
    return this.innerImageManager.getPlayerShipImage();
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
   * Gets the selected UFO image.
   * @param {number} index - The index corresponding to the selected image.
   * @return {object} the image to show for the UFO, or null if none exists.
   */
  getUfoImage(index) {
    return this.innerImageManager.getUfoImage(index);
  }

  /**
   * Gets the image to show on the game over screen.
   * @return {object} the game over image.
   */
  getGameOverImage() {
    return this.innerImageManager.getGameOverImage();
  }
}
