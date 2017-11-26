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
    // FIXME: Don't play sound in the "Clean" version
    if (!this.playedSound) {
      sounds.playGameOverSound();
      this.playedSound = true;
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

    // FIXME: Don't show image in the "Clean" version
    var image = imageManager.gameOverImage;
    context2d.drawImage(image, 100, 100, 600, 400);
  }
}
