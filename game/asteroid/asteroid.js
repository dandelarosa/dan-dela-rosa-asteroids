'use strict';

class Asteroid {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Should use superclasses to instantiate with the correct speed and radius.
   * @param {Object} builder - contains minSpeed, maxSpeed, and radius.
   */
  initialize(builder) {
    var minSpeed = builder.minSpeed;
    var maxSpeed = builder.maxSpeed;
    var radius = builder.radius;
    var randomSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    var randomAngle = Math.random() * 2 * Math.PI;
    this.dx = randomSpeed * Math.cos(randomAngle);
    this.dy = randomSpeed * Math.sin(randomAngle);
    this.radius = radius;
  }

  /**
   * Updates the object.
   */
  update() {
    this.x += this.dx;
    this.y += this.dy;
  }

  /**
   * Draws the object.
   */
  draw() {
    context2d.save();
    context2d.translate(this.x, this.y);

    context2d.fillStyle = 'green';
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
