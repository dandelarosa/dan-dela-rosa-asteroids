'use strict';

/**
 * An object that provides a different image each time it is invoked.
 */
class RouletteImage {
  /**
   * @param {string[]} imgSrcs - An array of sound file URLs.
   */
  constructor(imgSrcs) {
    this.images = [];
    for (var i = 0; i < imgSrcs.length; i++) {
      var src = imgSrcs[i];
      var img = document.createElement('img');
      img.src = src;
      this.images.push(img);
    }
    this.previouslyUsedIndex = undefined;
  }

  /**
   * Gets an image.
   * @return {Object} An image contained in this object
   */
  getImage() {
    var selectedIndex = Math.floor(Math.random() * this.images.length);
    while (selectedIndex === this.previouslyUsedIndex) {
      selectedIndex = Math.floor(Math.random() * this.image.length);
    }
    this.previouslyUsedIndex = selectedIndex;
    return this.images[selectedIndex];
  }
 } 
