'use strict';

/**
 * The version of the image manager with custom graphics.
 */
class ConfigImageManager {
  constructor() {
    this.factory = new ConfigImageFactory();

    this.gameOverImage = document.createElement('img');
    this.gameOverImage.src = 'assets_dda/images/Screen_shot_2016-01-07_at_12.07.42_PM.0.0.png.jpeg';

    this.ufoImage1 = document.createElement('img');
    this.ufoImage1.src = 'assets_dda/images/ufo/ufo1.png';

    this.ufoImage2 = document.createElement('img');
    this.ufoImage2.src = 'assets_dda/images/ufo/ufo2.png';

    this.ufoImage3 = document.createElement('img');
    this.ufoImage3.src = 'assets_dda/images/ufo/ufo3.png';
  }

  /**
   * Loads the sounds once config.json has been loaded.
   */
  loadConfig() {
    this.shipImageContainer = this.factory.imageFrom(configManager.images.player);
    this.bigAsteroidImageContainer = this.factory.imageFrom(configManager.images.bigAsteroid);
    this.mediumAsteroidImageContainer = this.factory.imageFrom(configManager.images.mediumAsteroid);
    this.smallAsteroidImageContainer = this.factory.imageFrom(configManager.images.smallAsteroid);
  }

  /**
   * Gets the player ship's image container.
   * @return {object} the ship image container.
   */
  getPlayerShipImageContainer() {
    return this.shipImageContainer;
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
   * Gets the selected UFO image.
   * @param {number} index - The index corresponding to the selected image.
   * @return {object} the image to show for the UFO, or null if none exists.
   */
  getUfoImage(index) {
    if (index === 1) {
      return this.ufoImage1;
    }
    else if (index === 2) {
      return this.ufoImage2;
    }
    else {
      return this.ufoImage3;
    }
  }

  /**
   * Gets the image to show on the game over screen.
   * @return {object} the game over image.
   */
  getGameOverImage() {
    return this.gameOverImage;
  }
}
