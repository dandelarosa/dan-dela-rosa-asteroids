'use strict';

/**
 * The object to use for configuring the game.
 */
class ConfigManager {
  constructor() {
    this.isLoaded = false;
    var manager = this;
    var configRequest = new XMLHttpRequest();
    configRequest.open('GET', 'config.json');
    configRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var configObject = JSON.parse(this.responseText);
        manager.loadConfigObject(configObject);
        // FIXME: DEBUG ONLY!!!
        console.log(configObject);
      }
    };
    configRequest.send();
  }

  /**
   * Loads the config object.
   * @param {Object} configObject - The object to process.
   */
  loadConfigObject(configObject) {
    this.audio = configObject.audio;
    this.isLoaded = true;
  }
}
