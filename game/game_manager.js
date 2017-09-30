'use strict';

/**
 * The object that manages game variables.
 */
class GameManager {
  constructor() {
    this.currentLevel = 1;
    this.needsNewLevel = false;

    this.currentLives = 3;
  }

  /**
   * Gets the number of asteroids to create at the beginning of the level.
   * @return {boolean} The number of asteroids to create at the beginning of the level.
   */
  numberOfAsteroidsToCreate() {
    return this.currentLevel + 2;
  }

  /**
   * Tells the manager that the game should advance to the next level.
   */
  goToNextLevel() {
    this.currentLevel++;
    this.needsNewLevel = true;
  }
}
