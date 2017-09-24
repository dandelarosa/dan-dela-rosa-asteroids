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
    this.wrapObject(this.ship);
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
  }
}
