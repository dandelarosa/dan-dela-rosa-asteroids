'use strict';

/**
 * The object that manages game variables.
 */
class GameManager {
  constructor() {
    this.currentLevel = 1;
  }

  /**
   * Gets the number of asteroids to create at the beginning of the level.
   * @return {boolean} The number of asteroids to create at the beginning of the level.
   */
  numberOfAsteroidsToCreate() {
    return this.currentLevel + 2;
  }
}
