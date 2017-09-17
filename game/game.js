'use strict';

/**
 * The root game object.
 */
class Game {
  constructor() {
    this.width = 800;
    this.height = 600;
    this.fps = 60;
  }

  /**
   * Updates the game's state.
   */
  update() {

  }

  /**
   * Draws the game state onto the screen.
   */
  draw() {
    context2d.fillStyle = 'black';
    context2d.fillRect(0, 0, this.width, this.height);
  }
}
