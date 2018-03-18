'use strict';

/**
 * The object used for managing images.
 */
class ImageManager {
  constructor() {
  }

  /**
   * Queries the system for the currently selected manager.
   * @return {object} The manager that should be used.
   */
  getCurrentManager() {
    if (configManager.isLoaded && !forceDefaultAssets) {
      return configImageManager;
    }
    else {
      return this.getCleanManager();
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
    return this.getCurrentManager().getPlayerShipImageContainer();
  }

  /**
   * Gets a random image container for the big asteroid.
   * @return {object} an image container.
   */
  getRandomBigAsteroidImageContainer() {
    return this.getCurrentManager().getRandomBigAsteroidImageContainer();
  }

  /**
   * Gets a random image container for the medium asteroid.
   * @return {object} an image container.
   */
  getRandomMediumAsteroidImageContainer() {
    return this.getCurrentManager().getRandomMediumAsteroidImageContainer();
  }

  /**
   * Gets a random image container for the small asteroid.
   * @return {object} an image container.
   */
  getRandomSmallAsteroidImageContainer() {
    return this.getCurrentManager().getRandomSmallAsteroidImageContainer();
  }

  /**
   * Gets an image container for the aggressive UFO.
   * @return {object} an image container.
   */
  getAggressiveUfoImageContainer() {
    return this.getCurrentManager().getAggressiveUfoImageContainer();
  }

  /**
   * Gets an image container for the passive UFO.
   * @return {object} an image container.
   */
  getPassiveUfoImageContainer() {
    return this.getCurrentManager().getPassiveUfoImageContainer();
  }

  /**
   * Gets the image container to show on the game over screen.
   * @return {object} the game over image container.
   */
  getGameOverImageContainer() {
    return this.getCurrentManager().getGameOverImageContainer();
  }
}
