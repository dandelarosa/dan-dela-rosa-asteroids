'use strict';

/**
 * A large asteroid.
 */
class BigAsteroid extends Asteroid {
  constructor(x, y) {
    super(x, y);

    this.initialize({
      minSpeed: 0.5,
      maxSpeed: 1.25,
      radius: 100,
    });

    this.type = 'big';

    this.image = imageManager.getRandomBigAsteroidImage();
  }
}
