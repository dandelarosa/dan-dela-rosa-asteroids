'use strict';

const COLLISION_RADIUS = 20;
const ROTATION_ANGLE_INCREMENT = 5;
const TRUST_COEFFICIENT = 0.25;
const DRAG_COEFFICIENT = 0.99;

/**
 * The player's ship entity.
 */
class Ship {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.radius = COLLISION_RADIUS;
    // 270 degrees = ship faces upwards
    this.angle = 270;

    this.invincibilityTimer = 60;
  }

  /**
   * Updates the object.
   */
  update() {
    if (keyboard.leftPressed) {
      this.angle -= ROTATION_ANGLE_INCREMENT;
    }
    if (keyboard.rightPressed) {
      this.angle += ROTATION_ANGLE_INCREMENT;
    }

    if (this.angle > 360) {
      this.angle -= 360;
    }
    else if (this.angle < 0) {
      this.angle += 360;
    }

    if (keyboard.upPressed) {
      this.dx += TRUST_COEFFICIENT * Math.cos(this.angle * Math.PI / 180.0);
      this.dy += TRUST_COEFFICIENT * Math.sin(this.angle * Math.PI / 180.0);
    }

    this.x += this.dx;
    this.y += this.dy;

    this.dx *= DRAG_COEFFICIENT;
    this.dy *= DRAG_COEFFICIENT;

    if (this.invincibilityTimer > 0) {
      this.invincibilityTimer--;
    }
  }

  /**
   * Checks if the ship is invincible.
   * @return {boolean} true if the ship is invincible, false if not.
   */
  isInvincible(){
    return this.invincibilityTimer > 0;
  }

  /**
   * Draws the object.
   */
  draw() {
    context2d.save();
    context2d.translate(this.x, this.y);
    context2d.rotate(this.angle * Math.PI / 180);

    var image = imageManager.getPlayerShipImage();
    if (image) {
      context2d.drawImage(image, -70, -26);
    }
    else {
      context2d.beginPath();
      context2d.moveTo(this.radius, 0);
      context2d.lineTo(-this.radius, -this.radius);
      context2d.lineTo(0, 0);
      context2d.lineTo(-this.radius, this.radius);
      context2d.closePath();
      context2d.fillStyle = 'blue';
      context2d.fill();
    }

    if (showHitboxes) {
      context2d.strokeStyle = 'white';
      context2d.beginPath();
      context2d.arc(0, 0, this.radius, 0, 2 * Math.PI);
      context2d.stroke();
    }

    context2d.restore();
  }
}
