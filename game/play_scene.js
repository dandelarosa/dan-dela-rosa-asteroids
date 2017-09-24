'use strict';

const MAX_BULLETS = 3;

/**
 * The active game scene.
 */
class PlayScene {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.ship = new Ship(this.width / 2, this.height / 2);
    this.playerBullets = [];
    this.canShoot = true;
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
  }
}
