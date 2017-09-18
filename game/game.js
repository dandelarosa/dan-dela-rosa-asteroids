'use strict';

/**
 * The root game object.
 */
class Game {
  constructor() {
    this.width = 800;
    this.height = 600;
    this.fps = 60;

    this.ship = new Ship(this.width / 2, this.height / 2);
  }

  /**
   * Updates the game's state.
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
   * Draws the game state onto the screen.
   */
  draw() {
    context2d.fillStyle = 'black';
    context2d.fillRect(0, 0, this.width, this.height);

    this.ship.draw();
  }
}
