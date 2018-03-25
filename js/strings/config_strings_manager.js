'use strict';

/**
 * The version of the strings manager the reads from the config file.
 */
class ConfigStringsManager {
  constructor() {
  }

  /**
   * Loads the sounds once config.json has been loaded.
   */
  loadConfig() {
    this.livesCounterString = configManager.strings.livesCounter;
  }

  /**
   * Gets the string for the lives counter.
   * @return {string} the text to display on the lives counter.
   */
  getLivesCounterString() {
    return this.livesCounterString;
  }
}
