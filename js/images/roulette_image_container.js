'use strict';

/**
 * An object that provides a different image each time it is invoked.
 */
class RouletteImageContainer {
  /**
   * @param {Object[]} configs - An array of sound file URLs.
   */
  constructor(configs) {
    this.imageContainers = [];
    for (var i = 0; i < configs.length; i++) {
      var src = configs[i].src;
      var offsetX = configs[i].offsetX;
      var offsetY = configs[i].offsetY;
      var width = configs[i].width;
      var height = configs[i].height;
      var imageContainer = new SingleImageContainer(src, offsetX, offsetY, width, height);
      this.imageContainers.push(imageContainer);
    }
  }

  /**
   * Gets an image container.
   * @return {Object} An image container from this object.
   */
  getImageContainer() {
    var selectedIndex = Math.floor(Math.random() * this.imageContainers.length);
    while (selectedIndex === this.previouslyUsedIndex) {
      selectedIndex = Math.floor(Math.random() * this.imageContainers.length);
    }
    this.previouslyUsedIndex = selectedIndex;
    return this.imageContainers[selectedIndex];
  }
 } 
