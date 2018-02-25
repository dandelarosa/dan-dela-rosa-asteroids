'use strict';

/**
 * A wrapper object that contains an image an important metadata.
 */
class SingleImageContainer {
  /**
   * @param {string} src - The image URL.
   * @param {number} offsetX - The x-offset from which to draw the image.
   * @param {number} offsetY - The y-offset from which to draw the image.
   */
  constructor(src, offsetX, offsetY) {
    this.image = document.createElement('img');
    this.image.src = src;

    // Optional parameters - protects from undefined values
    this.offsetX = offsetX ? offsetX : 0;
    this.offsetY = offsetY ? offsetY : 0; 
  }

  /**
   * Gets an image container.
   * @return {Object} An image container from this object.
   */
  getImageContainer() {
    return this;
  }
}
