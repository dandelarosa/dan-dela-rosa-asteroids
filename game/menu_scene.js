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

    context2d.textAlign = 'center';
    context2d.fillText('Press Enter to play', 400, 330);
  }
}
