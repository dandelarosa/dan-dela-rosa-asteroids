'use strict';

const UFO_DELAY = 600;

/**
 * The object that manages game variables.
 */
class GameManager {
  constructor() {
    this.setupNewGame();
    this.nextSceneID = 'menu';

    this.highScore = persistence.getNumber('high_score', 0);
    this.previousHighScore = this.highScore;
  }

  /**
   * Sets up a new game.
   */
  setupNewGame() {
    this.currentLives = 3;
    this.currentScore = 0;
    this.scoreRequiredForExtraLife = 10000;
    this.additionalScoreRequiredForNextExtraLife = 10000;

    this.ufoTimer = UFO_DELAY;

    this.currentLevel = 1;
  }

  startGame() {
    this.nextSceneID = 'nextlevel';

    if (this.previouslyGameOvered) {
      audioManager.playReplaySound();
    }
  }

  /**
   * Gets the number of asteroids to create at the beginning of the level.
   * @return {boolean} The number of asteroids to create at the beginning of the level.
   */
  numberOfAsteroidsToCreate() {
    return this.currentLevel + 2;
  }

  /**
   * Decrement the UFO timer.
   */
  decrementUFOTimer() {
    if (this.currentLives > 0) {
      this.ufoTimer--;
    }
  }

  /**
   * Resets the UFO timer.
   */
  resetUFOTimer() {
    this.ufoTimer = UFO_DELAY;
  }

  /**
   * Increases the player's score.
   * @param {number} amount - The number of points to reward to the player.
   */
  incrementScore(amount) {
    this.currentScore += amount;
    if (this.currentScore >= this.scoreRequiredForExtraLife) {
      this.currentLives++;
      audioManager.playBonusSound();
      this.scoreRequiredForExtraLife += this.additionalScoreRequiredForNextExtraLife;
    }
  }

  /**
   * Tells the manager that the game should advance to the next level.
   */
  goToNextLevel() {
    this.currentLevel++;
    this.nextSceneID = 'nextlevel';
  }

  /**
   * Tells the manager to show the game over state.
   */
  goToGameOver() {
    this.previousHighScore = this.highScore;
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
      persistence.setNumber('high_score', this.highScore);
    }

    this.nextSceneID = 'gameover';
    this.previouslyGameOvered = true;
  }

  /**
   * Draws the head up display (lives, score, etc.)
   */
  drawHUD() {
    context2d.fillStyle = 'white';
    context2d.font = '24px Courier New';

    context2d.textAlign = 'left';
    var livesString = 'Dans: ' + this.currentLives;
    context2d.fillText(livesString, 10, 30);

    context2d.textAlign = 'right';
    var scoreString = 'Score: ' + this.currentScore;
    context2d.fillText(scoreString, 790, 30);
  }
}
