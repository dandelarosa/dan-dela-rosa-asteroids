'use strict';

/**
 * The object used for managing images.
 */
class ImageManager {
  constructor() {
    this.bigAsteroidImage1 = document.createElement('img');
    this.bigAsteroidImage1.src = 'media/images/big_asteroid/bigasteroid1.png';

    this.bigAsteroidImage2 = document.createElement('img');
    this.bigAsteroidImage2.src = 'media/images/big_asteroid/bigasteroid2.png';

    this.bigAsteroidImage3 = document.createElement('img');
    this.bigAsteroidImage3.src = 'media/images/big_asteroid/bigasteroid3.png';

    this.bigAsteroidImage4 = document.createElement('img');
    this.bigAsteroidImage4.src = 'media/images/big_asteroid/bigasteroid4.png';

    this.bigAsteroidImage5 = document.createElement('img');
    this.bigAsteroidImage5.src = 'media/images/big_asteroid/bigasteroid5.png';

    this.bigAsteroidImage6 = document.createElement('img');
    this.bigAsteroidImage6.src = 'media/images/big_asteroid/bigasteroid6.png';

    this.bigAsteroidImage7 = document.createElement('img');
    this.bigAsteroidImage7.src = 'media/images/big_asteroid/bigasteroid7.png';

    this.bigAsteroidImage8 = document.createElement('img');
    this.bigAsteroidImage8.src = 'media/images/big_asteroid/bigasteroid8.png';

    this.bigAsteroidImage9 = document.createElement('img');
    this.bigAsteroidImage9.src = 'media/images/big_asteroid/bigasteroid9.png';

    this.carImage = document.createElement('img');
    this.carImage.src = 'media/images/car.png';

    this.gameOverImage = document.createElement('img');
    this.gameOverImage.src = 'media/images/Screen_shot_2016-01-07_at_12.07.42_PM.0.0.png.jpeg';

    this.mediumAsteroidImage1 = document.createElement('img');
    this.mediumAsteroidImage1.src = 'media/images/medium_asteroid/mediumasteroid1.png';

    this.mediumAsteroidImage2 = document.createElement('img');
    this.mediumAsteroidImage2.src = 'media/images/medium_asteroid/mediumasteroid2.png';

    this.mediumAsteroidImage3 = document.createElement('img');
    this.mediumAsteroidImage3.src = 'media/images/medium_asteroid/mediumasteroid3.png';

    this.mediumAsteroidImage4 = document.createElement('img');
    this.mediumAsteroidImage4.src = 'media/images/medium_asteroid/mediumasteroid4.png';

    this.mediumAsteroidImage5 = document.createElement('img');
    this.mediumAsteroidImage5.src = 'media/images/medium_asteroid/mediumasteroid5.png';

    this.mediumAsteroidImage6 = document.createElement('img');
    this.mediumAsteroidImage6.src = 'media/images/medium_asteroid/mediumasteroid6.png';

    this.mediumAsteroidImage7 = document.createElement('img');
    this.mediumAsteroidImage7.src = 'media/images/medium_asteroid/mediumasteroid7.png';

    this.smallAsteroidImage1 = document.createElement('img');
    this.smallAsteroidImage1.src = 'media/images/small_asteroid/smallasteroid1.png';

    this.smallAsteroidImage2 = document.createElement('img');
    this.smallAsteroidImage2.src = 'media/images/small_asteroid/smallasteroid2.png';

    this.smallAsteroidImage3 = document.createElement('img');
    this.smallAsteroidImage3.src = 'media/images/small_asteroid/smallasteroid3.png';

    this.smallAsteroidImage4 = document.createElement('img');
    this.smallAsteroidImage4.src = 'media/images/small_asteroid/smallasteroid4.png';

    this.smallAsteroidImage5 = document.createElement('img');
    this.smallAsteroidImage5.src = 'media/images/small_asteroid/smallasteroid5.png';

    this.smallAsteroidImage6 = document.createElement('img');
    this.smallAsteroidImage6.src = 'media/images/small_asteroid/smallasteroid6.png';

    this.smallAsteroidImage7 = document.createElement('img');
    this.smallAsteroidImage7.src = 'media/images/small_asteroid/smallasteroid7.png';

    this.smallAsteroidImage8 = document.createElement('img');
    this.smallAsteroidImage8.src = 'media/images/small_asteroid/smallasteroid8.png';

    this.smallAsteroidImage9 = document.createElement('img');
    this.smallAsteroidImage9.src = 'media/images/small_asteroid/smallasteroid9.png';

    this.smallAsteroidImage10 = document.createElement('img');
    this.smallAsteroidImage10.src = 'media/images/small_asteroid/smallasteroid10.png';

    this.smallAsteroidImage11 = document.createElement('img');
    this.smallAsteroidImage11.src = 'media/images/small_asteroid/smallasteroid11.png';

    this.smallAsteroidImage12 = document.createElement('img');
    this.smallAsteroidImage12.src = 'media/images/small_asteroid/smallasteroid12.png';

    this.ufoImage1 = document.createElement('img');
    this.ufoImage1.src = 'media/images/ufo/ufo1.png';

    this.ufoImage2 = document.createElement('img');
    this.ufoImage2.src = 'media/images/ufo/ufo2.png';

    this.ufoImage3 = document.createElement('img');
    this.ufoImage3.src = 'media/images/ufo/ufo3.png';
  }

  /**
   * Gets a random image for the big asteroid.
   * @return {object} an image.
   */
  getRandomBigAsteroidImage() {
    var index = Math.floor(9 * Math.random());
    if (index === 0) return this.bigAsteroidImage1;
    else if (index === 1) return this.bigAsteroidImage2;
    else if (index === 2) return this.bigAsteroidImage3;
    else if (index === 3) return this.bigAsteroidImage4;
    else if (index === 4) return this.bigAsteroidImage5;
    else if (index === 5) return this.bigAsteroidImage6;
    else if (index === 6) return this.bigAsteroidImage7;
    else if (index === 7) return this.bigAsteroidImage8;
    return this.bigAsteroidImage9;
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
}
