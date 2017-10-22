'use strict;'

const ENEMY_BULLET_RADIUS = 2;
const ENEMY_MUZZLE_VELOCITY = 20;
const ENEMY_SHELF_LIFE = 20; // In frames

/**
 * The enemy's offensive projectile.
 */
class EnemyBullet {
  /**
   * @param {object} ufo - The UFO object.
   * @param {object} player - The player object.
   */
  constructor(ufo, player) {
    this.lifeTimer = ENEMY_SHELF_LIFE;
    this.radius = ENEMY_BULLET_RADIUS;

    this.x = ufo.x;
    this.y = ufo.y;

    var angle;
    if (ufo.isAggressive() && player) {
      angle = Math.atan2(player.y - ufo.y, player.x - ufo.x);
    }
    else {
      angle = Math.random() * 2 * Math.PI;
    }

    this.dx = ENEMY_MUZZLE_VELOCITY * Math.cos(angle);
    this.dy = ENEMY_MUZZLE_VELOCITY * Math.sin(angle);
  }

  /**
   * Checks if the object should remain.
   * @return {boolean} true if the object should stay, false if not.
   */
  shouldExist() {
    return this.lifeTimer > 0;
  }

  /**
   * Updates the object.
   */
  update() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.lifeTimer > 0) {
      this.lifeTimer--;
    }
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

    if (DEBUG) {
      context2d.strokeStyle = 'white';
      context2d.beginPath();
      context2d.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context2d.stroke();
    }

    context2d.restore();
  }
}
