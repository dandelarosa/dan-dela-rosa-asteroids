'use strict';

/**
 * A small asteroid.
 */
class SmallAsteroid extends Asteroid {
  constructor(x, y) {
    super(x, y);

    this.initialize({
      minSpeed: 2.5,
      maxSpeed: 4.0,
      radius: 25,
    });

    this.type = 'small';

    var imageContainer = imageManager.getRandomSmallAsteroidImageContainer();
    if (imageContainer) {
      this.image = imageContainer.image;
    }
  }
}
