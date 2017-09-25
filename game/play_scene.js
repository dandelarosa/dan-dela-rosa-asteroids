'use strict';

const MAX_BULLETS = 3;

/**
 * The active game scene.
 */
class PlayScene {
  constructor(width, height, numAsteroids) {
    this.width = width;
    this.height = height;

    this.collisionDetector = new CollisionDetector();

    this.ship = new Ship(this.width / 2, this.height / 2);
    this.playerBullets = [];
    this.canShoot = true;

    this.asteroids = [];
    this.spawnAsteroids(numAsteroids);
  }

  /**
   * Updates the scene's state.
   */
  update() {
    this.ship.update();
    this.wrapObject(this.ship);

    if (this.ship) {
      if (keyboard.spacePressed && this.canShoot) {
        this.spawnBullet();
        this.canShoot = false;
      }
      else if (keyboard.spaceReleased) {
        this.canShoot = true;
      }
    }

    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      if (!playerBullet.shouldExist()) {
        this.killPlayerBullet(i);
        i--;
        continue;
      }
      playerBullet.update();
      this.wrapObject(playerBullet);
    }

    for (var j = 0; j < this.asteroids.length; j++) {
      var asteroid = this.asteroids[j];
      asteroid.update();
      this.wrapObject(asteroid);
    }
  }

  /**
   * Creates a bullet object.
   */
  spawnBullet() {
    if (this.ship && this.playerBullets.length < MAX_BULLETS) {
      var bullet = new PlayerBullet(this.ship);
      this.playerBullets.push(bullet);
      // TODO: play fire sound
    }
  }

  /**
   * Removes the selected bullet from the scene.
   * @param i - The index where the bullet is located.
   */
  killPlayerBullet(i) {
    this.playerBullets.splice(i, 1);
  }

  /**
   * Creates some asteroids.
   */
  spawnAsteroids(numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      var asteroidX = Math.random() * this.width;
      var asteroidY = Math.random() * this.height;
      var asteroid = new BigAsteroid(asteroidX, asteroidY);

      // Make sure new asteroids don't hit ship right away
      while (this.ship && this.collisionDetector.objectsWithin(asteroid, this.ship, 200)) {
        asteroid.x = Math.random() * this.width;
        asteroid.y = Math.random() * this.height;
      }

      this.asteroids.push(asteroid);
    }

  }

  /**
   * Checks if the given object out of bounds, and wraps it it the other side
   * of the screen if it does.
   * @param object - The object to check.
   */
  wrapObject(object) {
    if (object.x + object.radius < 0) {
      object.x = this.width + object.radius;
    }
    if (object.x - object.radius > this.width) {
      object.x = -object.radius;
    }
    if (object.y + object.radius < 0) {
      object.y = this.height + object.radius;
    }
    if (object.y - object.radius > this.width) {
      object.y = -object.radius;
    }
  }

  /**
   * Draws the scene.
   */
  draw() {
    this.ship.draw();
    this.playerBullets.forEach(function(bullet) {
      bullet.draw();
    });
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw();
    });
  }
}
