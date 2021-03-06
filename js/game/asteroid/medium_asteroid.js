'use strict';

/**
 * A medium asteroid.
 */
class MediumAsteroid extends Asteroid {
  constructor(x, y) {
    super(x, y);

    this.initialize({
      minSpeed: 1.25,
      maxSpeed: 2.5,
      radius: 50,
    });

    this.type = 'medium';

    var imageContainer = imageManager.getRandomMediumAsteroidImageContainer();
    if (imageContainer) {
      this.image = imageContainer.image;
    }
  }
}
