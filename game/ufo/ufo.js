'use strict;'

const UFO_RADIUS = 20;
const STEER_DELAY = 60;
const SHOOT_DELAY = 30;

/**
 * The UFO entity.
 */
class UFO {
  constructor() {
    this.x = 0;
    this.y = 300;

    this.dx = 3;
    this.dy = 0;

    this.radius = UFO_RADIUS;
  }

  /**
   * Updates the object.
   */
  update() {
    this.x += this.dx;
    this.y += this.dy;
    console.log(this.y);
  }

  /**
   * Checks if the UFO should remain.
   * @return {boolean} true if the UFO should stay, false if not.
   */
  shouldExist() {
    return true;
  }

  /**
   * Checks if the UFO should change directions.
   * @return {boolean} true if the UFO should steer, false if not.
   */
  shouldSteer() {
    return false;
  }

  /**
   * Changes the UFO's direction.
   */
  steer() {
  }

  /**
   * Checks if the UFO should shoot.
   * @return {boolean} true if the UFO should shoot, false if not.
   */
  shouldShoot() {
    return false;
  }

  /**
   * Draws the object.
   */
  draw() {
    context2d.save();
    context2d.translate(this.x, this.y);

    // TODO: implement for real

    if (DEBUG) {
      context2d.strokeStyle = 'white';
      context2d.beginPath();
      context2d.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context2d.stroke();
    }

    context2d.restore();
  }
}
