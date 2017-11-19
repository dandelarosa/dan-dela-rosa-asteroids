'use strict';

class GameOverScene {
  constructor(gameManager) {
    this.gameManager = gameManager;

    this.playedSound = false;

    // FIXME: Don't show image in the "Clean" version
    this.image = (function() {
      var image = document.createElement('img');
      image.src  = 'media/images/Screen_shot_2016-01-07_at_12.07.42_PM.0.0.png.jpeg';
      return image;
    })();
  }

  /**
   * Updates the scene's state.
   */
  update() {
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
    var highScoreString = 'High Score: ' + this.gameManager.highScore;
    context2d.fillText(highScoreString, 400, 30);

    if (this.gameManager.highScore > this.gameManager.previousHighScore) {
      context2d.textAlign = 'center';
      context2d.fillText('New High Score!', 400, 75);
    }

    context2d.drawImage(this.image, 100, 100, 600, 400);
  }
}
