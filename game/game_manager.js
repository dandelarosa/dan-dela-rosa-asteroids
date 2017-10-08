'use strict';

/**
 * The object that manages game variables.
 */
class GameManager {
  constructor() {
    this.currentLevel = 1;
    this.needsNewLevel = false;

    this.currentLives = 3;
    this.currentScore = 0;
    this.scoreRequiredForExtraLife = 10000;
    this.additionalScoreRequiredForNextExtraLife = 10000;
  }

  /**
   * Gets the number of asteroids to create at the beginning of the level.
   * @return {boolean} The number of asteroids to create at the beginning of the level.
   */
  numberOfAsteroidsToCreate() {
    return this.currentLevel + 2;
  }

  /**
   * Increases the player's score.
   * @param {number} amount - The number of points to reward to the player.
   */
  incrementScore(amount) {
    this.currentScore += amount;
    if (this.currentScore >= this.scoreRequiredForExtraLife) {
      this.currentLives++;
      sounds.playBonusSound();
      this.scoreRequiredForExtraLife += this.additionalScoreRequiredForNextExtraLife;
    }
  }

  /**
   * Tells the manager that the game should advance to the next level.
   */
  goToNextLevel() {
    this.currentLevel++;
    this.needsNewLevel = true;
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
