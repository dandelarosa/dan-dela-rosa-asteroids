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
      this.innerManager = configImageManager;
    }
    else {
      this.innerManager = this.getCleanManager();
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
   * Gets the player ship's image container.
   * @return {object} the ship image container.
   */
  getPlayerShipImageContainer() {
    return this.innerManager.getPlayerShipImageContainer();
  }

  /**
   * Gets a random image container for the big asteroid.
   * @return {object} an image container.
   */
  getRandomBigAsteroidImageContainer() {
    return this.innerManager.getRandomBigAsteroidImageContainer();
  }

  /**
   * Gets a random image container for the medium asteroid.
   * @return {object} an image container.
   */
  getRandomMediumAsteroidImageContainer() {
    return this.innerManager.getRandomMediumAsteroidImageContainer();
  }

  /**
   * Gets a random image container for the small asteroid.
   * @return {object} an image container.
   */
  getRandomSmallAsteroidImageContainer() {
    return this.innerManager.getRandomSmallAsteroidImageContainer();
  }

  /**
   * Gets an image container for the aggressive UFO.
   * @return {object} an image container.
   */
  getAggressiveUfoImageContainer() {
    return this.innerManager.getAggressiveUfoImageContainer();
  }

  /**
   * Gets an image container for the passive UFO.
   * @return {object} an image container.
   */
  getPassiveUfoImageContainer() {
    return this.innerManager.getPassiveUfoImageContainer();
  }

  /**
   * Gets the image to show on the game over screen.
   * @return {object} the game over image.
   */
  getGameOverImage() {
    return this.innerManager.getGameOverImage();
  }
}
