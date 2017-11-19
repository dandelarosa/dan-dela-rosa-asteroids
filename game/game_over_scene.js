'use strict';

class GameOverScene {
  constructor() {
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
    context2d.drawImage(this.image, 100, 100, 600, 400);
  }
}
