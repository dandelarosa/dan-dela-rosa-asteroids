'use strict';

/**
 * The root game object.
 */
class Game {
  constructor() {
    this.width = 800;
    this.height = 600;
    this.fps = 60;

    this.gameManager = new GameManager();
    this.currentScene = new PlayScene(this.width, this.height, this.gameManager);

    DEBUG = persistence.getBoolean('debug_on');
    this.canToggleDebug;
  }

  /**
   * Updates the game's state.
   */
  update() {
    if (keyboard.onePressed && this.canToggleDebug) {
      DEBUG = !DEBUG;
      persistence.setBoolean('debug_on', DEBUG);
      this.canToggleDebug = false;
    }
    else if (keyboard.oneReleased) {
      this.canToggleDebug = true;
    }

    if (this.gameManager.needsNewLevel) {
      this.currentScene = new PlayScene(this.width, this.height, this.gameManager);
      this.gameManager.needsNewLevel = false;
    }

    this.currentScene.update();
  }

  /**
   * Draws the game state onto the screen.
   */
  draw() {
    context2d.fillStyle = 'black';
    context2d.fillRect(0, 0, this.width, this.height);

    this.currentScene.draw();

    this.gameManager.drawHUD();
  }
}
