'use strict';

/**
 * A wrapper object that contains an image an important metadata.
 */
class SingleImageContainer {
  constructor(src, offsetX, offsetY) {
    this.image = document.createElement('img');
    this.image.src = src;

    // Optional parameters - protects from undefined values
    this.offsetX = offsetX ? offsetX : 0;
    this.offsetY = offsetY ? offsetY : 0; 
  }
}
