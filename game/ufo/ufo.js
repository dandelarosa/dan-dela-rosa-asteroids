'use strict';

const UFO_RADIUS = 20;
const STEER_DELAY = 60;
const SHOOT_DELAY = 30;

/**
 * The UFO entity.
 */
class UFO {
  constructor() {
    this.x = -UFO_RADIUS;
    this.y = 600 * Math.random();

    this.dx = Math.random() >= 0.5 ? 3 : -3;
    this.dy = 0;

    this.radius = UFO_RADIUS;

    this.aggressive = Math.random() >= 0.5;

    this.distanceTraveled = 0;
    this.steerTimer = STEER_DELAY;
    this.shootTimer = SHOOT_DELAY;
  }

  /**
   * Checks if this UFO is aggressive.
   * @return {boolean} true if the UFO is aggressive, false if it is not.
   */
  isAggressive() {
    return this.aggressive;
  }

  /**
   * Updates the object.
   */
  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.distanceTraveled += this.dx;
    this.steerTimer--;
    this.shootTimer--;
  }

  /**
   * Checks if the UFO should remain.
   * @return {boolean} true if the UFO should stay, false if not.
   */
  shouldExist() {
    if (Math.abs(this.distanceTraveled) > 800 + 2 * UFO_RADIUS) {
      return false;
    }
    return true;
  }

  /**
   * Checks if the UFO should change directions.
   * @return {boolean} true if the UFO should steer, false if not.
   */
  shouldSteer() {
    if (this.steerTimer == 0) {
      this.steerTimer = STEER_DELAY;
      return true;
    }
    return false;
  }

  /**
   * Changes the UFO's direction.
   */
  steer() {
    var direction = Math.floor(Math.random() * 3);
    if (direction === 2) {
      this.dy = 3;
    }
    else if (direction === 1) {
      this.dy = -3;
    }
    else {
      this.dy = 0;
    }
  }

  /**
   * Checks if the UFO should shoot.
   * @return {boolean} true if the UFO should shoot, false if not.
   */
  shouldShoot() {
    if (this.shootTimer == 0) {
      this.shootTimer = SHOOT_DELAY;
      return true;
    }
    return false;
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
