'use strict';

/**
 * The startup menu.
 */
class MenuScene {
  /**
   * @param {object} gameManager - The game manager.
   */
  constructor(gameManager) {
    this.gameManager = gameManager;
  }

  /**
   * Updates the scene's state.
   */
  update() {
    if (keyboard.enterPressed && !keyboard.enterPressedPreviousFrame) {
      this.gameManager.startGame();
    }
  }

  /**
   * Draws the scene.
   */
  draw() {
    context2d.fillStyle = 'white';
    context2d.font = '24px Courier New';
    context2d.textAlign = 'center';
    context2d.fillText('Dan Dela Rosa Asteroids', 400, 270);
    context2d.fillText('Press left and right to turn ship', 400, 330);
    context2d.fillText('Press up to trust', 400, 360);
    context2d.fillText('Press space to fire', 400, 390);
    context2d.fillText('Press enter to play and pause', 400, 420);
  }
}
