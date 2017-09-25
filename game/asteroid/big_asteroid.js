'use strict';

/**
 * A large asteroid.
 */
class BigAsteroid extends Asteroid {
  constructor(x, y) {
    super(x, y);

    this.initialize({
      minSpeed: 1,
      maxSpeed: 3,
      radius: 100,
    });

    this.type = 'big';
  }
}
