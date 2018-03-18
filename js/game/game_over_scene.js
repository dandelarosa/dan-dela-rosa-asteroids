'use strict';

class GameOverScene {
  constructor(gameManager) {
    this.gameManager = gameManager;

    this.playedSound = false;
  }

  /**
   * Updates the scene's state.
   */
  update() {
    if (!this.playedSound) {
      audioManager.playGameOverSound();
      this.playedSound = true;
    }

    if (keyboard.enterPressed && !keyboard.enterPressedPreviousFrame) {
      this.gameManager.setupNewGame();
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
    context2d.fillText('GAME OVER', 400, 30);

    var highScoreString = '';
    if (this.gameManager.highScore > this.gameManager.previousHighScore) {
      highScoreString += 'NEW! ';
    }
    highScoreString += 'High Score: ';
    highScoreString += this.gameManager.highScore;
    context2d.textAlign = 'center';
    context2d.fillText(highScoreString, 400, 75);

    var imageContainer = imageManager.getGameOverImageContainer();
    if (imageContainer) {
      var image = imageContainer.image;
      var x = imageContainer.offsetX;
      var y = imageContainer.offsetY;
      var width = imageContainer.width;
      var height = imageContainer.height;
      context2d.drawImage(image, x, y, width, height);
    }

    context2d.textAlign = 'center';
    context2d.fillText('Press Enter to play again', 400, 560);
  }
}
