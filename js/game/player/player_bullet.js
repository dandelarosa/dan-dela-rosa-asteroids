'use strict';

const BULLET_RADIUS = 2.0;
const MUZZLE_VELOCITY = 15;
const SHELF_LIFE = 25;

/**
 * The player's bullet.
 */
class PlayerBullet {
  constructor(ship) {
    this.x = ship.x;
    this.y = ship.y;
    this.radius = BULLET_RADIUS;

    this.dx = ship.dx + MUZZLE_VELOCITY * Math.cos(ship.angle * Math.PI / 180.0);
    this.dy = ship.dy + MUZZLE_VELOCITY * Math.sin(ship.angle * Math.PI / 180.0);

    this.currentLife = SHELF_LIFE;
  }

  /**
   * Updates the object.
   */
  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.currentLife -= 1;
  }

  /**
   * Checks if this bullet should be destroyed.
   * @return true if the bullet should remain in the scene.
   */
  shouldExist() {
    return this.currentLife > 0;
  }

  /**
   * Draws the object.
   */
  draw() {
    context2d.save();
    context2d.translate(this.x, this.y);

    context2d.fillStyle = 'white';
    context2d.beginPath();
    context2d.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context2d.fill();

    if (showHitboxes) {
      context2d.strokeStyle = 'red';
      context2d.beginPath();
      context2d.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context2d.stroke();
    }

    context2d.restore();
  }
}
