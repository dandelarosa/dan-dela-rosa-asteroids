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

    this.canToggleDebug = true;
  }

  /**
   * Updates the game's state.
   */
  update() {
    if (keyboard.onePressed && !keyboard.onePressedPreviousFrame) {
      showHitboxes = !showHitboxes;
      persistence.setBoolean('show_hitboxes', showHitboxes);
    }
    if (keyboard.twoPressed && !keyboard.twoPressedPreviousFrame) {
      forceDefaultAssets = !forceDefaultAssets;
      persistence.setBoolean('force_default_assets', forceDefaultAssets);
    }

    if (this.gameManager.nextSceneID === 'nextlevel') {
      this.currentScene = new PlayScene(this.width, this.height, this.gameManager);
    }
    else if (this.gameManager.nextSceneID === 'gameover') {
      this.currentScene = new GameOverScene(this.gameManager);
    }
    else if (this.gameManager.nextSceneID === 'menu') {
      this.currentScene = new MenuScene(this.gameManager);
    }
    this.gameManager.nextSceneID = null;

    this.currentScene.update();
    keyboard.afterFrame();
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
