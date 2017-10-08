'use strict';

const MAX_BULLETS = 3;

/**
 * The active game scene.
 */
class PlayScene {
  constructor(width, height, gameManager) {
    this.width = width;
    this.height = height;
    this.gameManager = gameManager;

    this.paused = false;
    this.pausePressed = false;

    this.collisionDetector = new CollisionDetector();

    this.spawnShip();
    this.playerBullets = [];
    this.canShoot = true;

    this.asteroids = [];
    this.spawnAsteroids(this.gameManager.numberOfAsteroidsToCreate());

    this.deathTimer = 0;
  }

  /**
   * Updates the scene's state.
   */
  update() {
    if (keyboard.enterPressed && !this.pausePressed) {
      this.paused = !this.paused;
      this.pausePressed = true;
    }
    else if (keyboard.enterReleased) {
      this.pausePressed = false;
    }
    if (this.paused) {
      return;
    }

    if (this.ship) {
      this.ship.update();
      this.wrapObject(this.ship);
      if (keyboard.spacePressed && this.canShoot) {
        this.spawnBullet();
        this.canShoot = false;
      }
      else if (keyboard.spaceReleased) {
        this.canShoot = true;
      }
    }

    // Update player bullets
    for (var i = 0; i < this.playerBullets.length; i++) {
      var playerBullet = this.playerBullets[i];
      if (!playerBullet.shouldExist()) {
        this.killPlayerBulletAtIndex(i);
        i--;
        continue;
      }
      playerBullet.update();
      this.wrapObject(playerBullet);
    }

    // Update asteroids
    for (var j = 0; j < this.asteroids.length; j++) {
      var asteroid = this.asteroids[j];
      asteroid.update();
      this.wrapObject(asteroid);
    }

    // Check for collisions between player bullets and asteroids
    for (var i = 0; i < this.playerBullets.length; i++) {
      for (var j = 0; j < this.asteroids.length; j++) {
        var playerBullet = this.playerBullets[i];
        var asteroid = this.asteroids[j];
        if (this.collisionDetector.collisionBetween(playerBullet, asteroid)) {
          this.killPlayerBulletAtIndex(i);
          i--;
          this.killAsteroidAtIndex(j);
          // TODO: play explosion sound
          this.playerKilledAsteroid();
          break;
        }
      }
    }

    // Check for collisions between player and asteroids
    if (this.ship) {
      for (var i = 0; i < this.asteroids.length; i++) {
        var asteroid = this.asteroids[i];
        if (this.collisionDetector.collisionBetween(this.ship, asteroid)) {
          this.killAsteroidAtIndex(i);
          if (this.ship.isInvincible()) {
            this.playerKilledAsteroid();
          }
          else {
            this.killShip();
          }
          break;
        }
      }
    }

    if (this.deathTimer > 0) {
      this.deathTimer--;
      if (this.deathTimer === 0) {
        if (this.gameManager.currentLives > 0) {
          this.spawnShip();
        }
        else {
          // TODO: go to game over scene
        }
      }
    }

    if (this.shouldGoToNextLevel()) {
      this.gameManager.goToNextLevel();
    }
  }

  /**
   * Creates the player ship.
   */
  spawnShip() {
    this.ship = new Ship(this.width / 2, this.height / 2);
  }

  /**
   * Destroys the player ship.
   */
  killShip() {
    // TODO: play explosion sound
    // TODO: play player death sound
    this.ship = null;
    this.gameManager.currentLives--;
    this.deathTimer = 60;
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
  killPlayerBulletAtIndex(i) {
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
   * Removes the selected asteroid from the scene. It may also spawn new asteroids.
   * @param i - The index where the asteroid is located.
   */
  killAsteroidAtIndex(i) {
    var removedAsteroids = this.asteroids.splice(i, 1);
    for (var j = 0; j < removedAsteroids.length; j++) {
      var oldAsteroid = removedAsteroids[j];
      if (oldAsteroid.type === 'big') {
        var newAsteroid = new MediumAsteroid(oldAsteroid.x, oldAsteroid.y);
        this.asteroids.push(newAsteroid);
        newAsteroid = new MediumAsteroid(oldAsteroid.x, oldAsteroid.y);
        this.asteroids.push(newAsteroid);
      }
      else if (oldAsteroid.type === 'medium') {
        var newAsteroid = new SmallAsteroid(oldAsteroid.x, oldAsteroid.y);
        this.asteroids.push(newAsteroid);
        newAsteroid = new SmallAsteroid(oldAsteroid.x, oldAsteroid.y);
        this.asteroids.push(newAsteroid);
      }
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
   * Handles the event when the player kills an asteroid.
   */
  playerKilledAsteroid() {
    // TODO: play asteroids kill sound
    // TODO: update score
  }

  /**
   * Checks if the game should go to the next level.
   * @return {boolean} Whether to get to the next level.
   */
  shouldGoToNextLevel() {
    // Don't transition if there are still asteroids
    if (this.asteroids.length > 0) {
      return false;
    }
    // TODO: Don't transition if the UFO is alive
    // TODO: Don't transition if there is still an enemy bullet
    // Don't transition if there are still player bullets
    if (this.playerBullets.length > 0) {
      return false;
    }
    // Don't transition while respawning the ship
    if (!this.ship) {
      return false;
    }
    return true;
  }

  /**
   * Draws the scene.
   */
  draw() {
    if (this.ship) {
      this.ship.draw();
    }
    this.playerBullets.forEach(function(bullet) {
      bullet.draw();
    });
    this.asteroids.forEach(function(asteroid) {
      asteroid.draw();
    });

    if (this.paused) {
      context2d.fillStyle = 'white';
      context2d.font = '24px Courier New';
      context2d.textAlign = 'center';
      context2d.fillText('PAUSED', 400, 300);
    }
  }
}
