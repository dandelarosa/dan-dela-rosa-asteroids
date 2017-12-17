'use strict';

/**
 * The object to use for configuring the game.
 */
class ConfigManager {
  constructor() {
    // This is just a POC
    var configRequest = new XMLHttpRequest();
    configRequest.open('GET', 'config.json');
    configRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var configObject = JSON.parse(this.responseText);
        // TODO: implement for real
        console.log(configObject);
      }
    };
    configRequest.send();
  }
}
