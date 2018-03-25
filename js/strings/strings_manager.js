'use strict';

/**
 * The object used for managing strings.
 */
class StringsManager {
  constructor() {
  }

  /**
   * Queries the system for the currently selected manager.
   * @return {object} The manager that should be used.
   */
  getCurrentManager() {
    if (configManager.isLoaded && !forceDefaultAssets) {
      return configStringsManager;
    }
    else {
      return this.getDefaultManager();
    }
  }

  /**
   * Lazy loads the default manager.
   * @return {object} The default manager.
   */
  getDefaultManager() {
    this.defaultManager = this.defaultManager || new DefaultStringsManager();
    return this.defaultManager;
  }

  /**
   * Gets the string for the lives counter.
   * @return {string} the text to display on the lives counter.
   */
  getLivesCounterString() {
    return this.getCurrentManager().getLivesCounterString();
  }
}
