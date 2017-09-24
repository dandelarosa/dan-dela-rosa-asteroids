'use strict';

/**
 * The active game scene.
 */
class PlayScene {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    
    this.ship = new Ship(this.width / 2, this.height / 2);
  }

  /**
   * Updates the scene's state.
   */
  update() {
    this.ship.update();

    if (this.ship.x + this.ship.radius < 0) {
      this.ship.x = this.width + this.ship.radius;
    }
    if (this.ship.x - this.ship.radius > this.width) {
      this.ship.x = -this.ship.radius;
    }
    if (this.ship.y + this.ship.radius < 0) {
      this.ship.y = this.height + this.ship.radius;
    }
    if (this.ship.y - this.ship.radius > this.width) {
      this.ship.y = -this.ship.radius;
    }
  }

  /**
   * Draws the scene.
   */
  draw() {
    this.ship.draw();
  }
}
