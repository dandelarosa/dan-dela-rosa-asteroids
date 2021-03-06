'use strict';

/**
 * The version of the image manager with custom graphics.
 */
class ConfigImageManager {
  constructor() {
    this.factory = new ConfigImageFactory();
  }

  /**
   * Loads the sounds once config.json has been loaded.
   */
  loadConfig() {
    this.shipImageContainer = this.factory.imageFrom(configManager.images.player);
    this.bigAsteroidImageContainer = this.factory.imageFrom(configManager.images.bigAsteroid);
    this.mediumAsteroidImageContainer = this.factory.imageFrom(configManager.images.mediumAsteroid);
    this.smallAsteroidImageContainer = this.factory.imageFrom(configManager.images.smallAsteroid);
    this.aggessiveUfoImageContainer = this.factory.imageFrom(configManager.images.aggressiveUfo);
    this.passiveUfoImageContainer = this.factory.imageFrom(configManager.images.passiveUfo);
    this.gameOverImageContainer = this.factory.imageFrom(configManager.images.gameOver);
  }

  /**
   * Gets the player ship's image container.
   * @return {object} the ship image container.
   */
  getPlayerShipImageContainer() {
    return this.shipImageContainer.getImageContainer();
  }

  /**
   * Gets a random image container for the big asteroid.
   * @return {object} an image container.
   */
  getRandomBigAsteroidImageContainer() {
    return this.bigAsteroidImageContainer.getImageContainer();
  }

  /**
   * Gets a random image container for the medium asteroid.
   * @return {object} an image container.
   */
  getRandomMediumAsteroidImageContainer() {
    return this.mediumAsteroidImageContainer.getImageContainer();
  }

  /**
   * Gets a random image container for the small asteroid.
   * @return {object} an image container.
   */
  getRandomSmallAsteroidImageContainer() {
    return this.smallAsteroidImageContainer.getImageContainer();
  }

  /**
   * Gets an image container for the aggressive UFO.
   * @return {object} an image container.
   */
  getAggressiveUfoImageContainer() {
    return this.aggessiveUfoImageContainer.getImageContainer();
  }

  /**
   * Gets an image container for the passive UFO.
   * @return {object} an image container.
   */
  getPassiveUfoImageContainer() {
    return this.passiveUfoImageContainer.getImageContainer();
  }

  /**
   * Gets the image container to show on the game over screen.
   * @return {object} the game over image container.
   */
  getGameOverImageContainer() {
    return this.gameOverImageContainer.getImageContainer();
  }
}
