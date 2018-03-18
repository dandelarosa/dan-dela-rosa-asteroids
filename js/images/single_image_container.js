'use strict';

/**
 * A wrapper object that contains an image an important metadata.
 */
class SingleImageContainer {
  /**
   * @param {string} src - The image URL.
   * @param {number} offsetX - The x-offset from which to draw the image.
   * @param {number} offsetY - The y-offset from which to draw the image.
   * @param {number} width - (optional) the width of the image.
   * @param {number} height - (optional) the height of the image.
   */
  constructor(src, offsetX, offsetY, width, height) {
    this.image = document.createElement('img');
    this.image.src = src;

    // Optional parameters - protects from undefined values
    this.offsetX = offsetX ? offsetX : 0;
    this.offsetY = offsetY ? offsetY : 0;

    // Can be undefined
    this.width = width;
    this.height = height;
  }

  /**
   * Gets an image container.
   * @return {Object} An image container from this object.
   */
  getImageContainer() {
    return this;
  }
}
