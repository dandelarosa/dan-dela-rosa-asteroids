'use strict';

/**
 * The object for tracking key presses.
 */
class Keyboard {
  constructor() {
    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    this.spacePressed = false;
    this.spaceReleased = true;
    this.enterPressed = false;
    this.enterReleased = true;
  }

  /**
   * Handles the keydown event.
   * @param evt - The keydown event object.
   */
  keydown(evt) {
    switch (evt.keyCode) {
      case 13:
        this.enterPressed = true;
        this.enterReleased = false;
        break;
      case 32:
        this.spacePressed = true;
        this.spaceReleased = false;
        break;
      case 37:
        this.leftPressed = true;
        break;
      case 38:
        this.upPressed = true;
        break;
      case 39:
        this.rightPressed = true;
        break;
      case 40:
        this.downPressed = true;
        break;
    }
  }

  /**
   * Handles the keyup event.
   * @param evt - The keyup event object.
   */
  keyup(evt) {
    switch (evt.keyCode) {
      case 13:
        this.enterPressed = false;
        this.enterReleased = true;
        break;
      case 32:
        this.spacePressed = false;
        this.spaceReleased = true;
        break;
      case 37:
        this.leftPressed = false;
        break;
      case 38:
        this.upPressed = false;
        break;
      case 39:
        this.rightPressed = false;
        break;
      case 40:
        this.downPressed = false;
        break;
    }
  }
}
