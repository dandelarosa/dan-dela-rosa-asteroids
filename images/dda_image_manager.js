'use strict';

/**
 * The version of the image manager with custom graphics.
 */
class DDAImageManager {
  constructor() {
    this.bigAsteroidImageContainer = new RouletteImageContainer([
      {src: 'assets_dda/images/big_asteroid/bigasteroid1.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid2.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid3.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid4.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid5.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid6.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid7.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid8.png'},
      {src: 'assets_dda/images/big_asteroid/bigasteroid9.png'}
    ]);

    this.carImage = document.createElement('img');
    this.carImage.src = 'assets_dda/images/car.png';

    this.shipImageContainer = new SingleImageContainer('assets_dda/images/car.png', -70, -26);

    this.gameOverImage = document.createElement('img');
    this.gameOverImage.src = 'assets_dda/images/Screen_shot_2016-01-07_at_12.07.42_PM.0.0.png.jpeg';

    this.mediumAsteroidImage1 = document.createElement('img');
    this.mediumAsteroidImage1.src = 'assets_dda/images/medium_asteroid/mediumasteroid1.png';

    this.mediumAsteroidImage2 = document.createElement('img');
    this.mediumAsteroidImage2.src = 'assets_dda/images/medium_asteroid/mediumasteroid2.png';

    this.mediumAsteroidImage3 = document.createElement('img');
    this.mediumAsteroidImage3.src = 'assets_dda/images/medium_asteroid/mediumasteroid3.png';

    this.mediumAsteroidImage4 = document.createElement('img');
    this.mediumAsteroidImage4.src = 'assets_dda/images/medium_asteroid/mediumasteroid4.png';

    this.mediumAsteroidImage5 = document.createElement('img');
    this.mediumAsteroidImage5.src = 'assets_dda/images/medium_asteroid/mediumasteroid5.png';

    this.mediumAsteroidImage6 = document.createElement('img');
    this.mediumAsteroidImage6.src = 'assets_dda/images/medium_asteroid/mediumasteroid6.png';

    this.mediumAsteroidImage7 = document.createElement('img');
    this.mediumAsteroidImage7.src = 'assets_dda/images/medium_asteroid/mediumasteroid7.png';

    this.smallAsteroidImage1 = document.createElement('img');
    this.smallAsteroidImage1.src = 'assets_dda/images/small_asteroid/smallasteroid1.png';

    this.smallAsteroidImage2 = document.createElement('img');
    this.smallAsteroidImage2.src = 'assets_dda/images/small_asteroid/smallasteroid2.png';

    this.smallAsteroidImage3 = document.createElement('img');
    this.smallAsteroidImage3.src = 'assets_dda/images/small_asteroid/smallasteroid3.png';

    this.smallAsteroidImage4 = document.createElement('img');
    this.smallAsteroidImage4.src = 'assets_dda/images/small_asteroid/smallasteroid4.png';

    this.smallAsteroidImage5 = document.createElement('img');
    this.smallAsteroidImage5.src = 'assets_dda/images/small_asteroid/smallasteroid5.png';

    this.smallAsteroidImage6 = document.createElement('img');
    this.smallAsteroidImage6.src = 'assets_dda/images/small_asteroid/smallasteroid6.png';

    this.smallAsteroidImage7 = document.createElement('img');
    this.smallAsteroidImage7.src = 'assets_dda/images/small_asteroid/smallasteroid7.png';

    this.smallAsteroidImage8 = document.createElement('img');
    this.smallAsteroidImage8.src = 'assets_dda/images/small_asteroid/smallasteroid8.png';

    this.smallAsteroidImage9 = document.createElement('img');
    this.smallAsteroidImage9.src = 'assets_dda/images/small_asteroid/smallasteroid9.png';

    this.smallAsteroidImage10 = document.createElement('img');
    this.smallAsteroidImage10.src = 'assets_dda/images/small_asteroid/smallasteroid10.png';

    this.smallAsteroidImage11 = document.createElement('img');
    this.smallAsteroidImage11.src = 'assets_dda/images/small_asteroid/smallasteroid11.png';

    this.smallAsteroidImage12 = document.createElement('img');
    this.smallAsteroidImage12.src = 'assets_dda/images/small_asteroid/smallasteroid12.png';

    this.ufoImage1 = document.createElement('img');
    this.ufoImage1.src = 'assets_dda/images/ufo/ufo1.png';

    this.ufoImage2 = document.createElement('img');
    this.ufoImage2.src = 'assets_dda/images/ufo/ufo2.png';

    this.ufoImage3 = document.createElement('img');
    this.ufoImage3.src = 'assets_dda/images/ufo/ufo3.png';
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
   * Gets a random image for the medium asteroid.
   * @return {object} an image.
   */
  getRandomMediumAsteroidImage() {
    var index = Math.floor(7 * Math.random());
    if (index === 0) return this.mediumAsteroidImage1;
    else if (index === 1) return this.mediumAsteroidImage2;
    else if (index === 2) return this.mediumAsteroidImage3;
    else if (index === 3) return this.mediumAsteroidImage4;
    else if (index === 4) return this.mediumAsteroidImage5;
    else if (index === 5) return this.mediumAsteroidImage6;
    return this.bigAsteroidImage7;
  }

  /**
   * Gets a random image for the small asteroid.
   * @return {object} an image.
   */
  getRandomSmallAsteroidImage() {
    var index = Math.floor(12 * Math.random());
    if (index === 0) return this.smallAsteroidImage1;
    else if (index === 1) return this.smallAsteroidImage2;
    else if (index === 2) return this.smallAsteroidImage3;
    else if (index === 3) return this.smallAsteroidImage4;
    else if (index === 4) return this.smallAsteroidImage5;
    else if (index === 5) return this.smallAsteroidImage6;
    else if (index === 6) return this.smallAsteroidImage7;
    else if (index === 7) return this.smallAsteroidImage8;
    else if (index === 8) return this.smallAsteroidImage9;
    else if (index === 9) return this.smallAsteroidImage10;
    else if (index === 10) return this.smallAsteroidImage11;
    return this.smallAsteroidImage12;
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
