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
    this.enterPressedPreviousFrame = false;

    this.onePressed = false;
    this.oneReleased = true;
    this.onePressedPreviousFrame = false;

    this.twoPressed = false;
    this.twoReleased = true;
    this.twoPressedPreviousFrame = false;
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
      case 49:
        this.onePressed = true;
        this.oneReleased = false;
        break;
      case 50:
        this.twoPressed = true;
        this.twoReleased = false;
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
      case 49:
        this.onePressed = false;
        this.oneReleased = true;
        break;
      case 50:
        this.twoPressed = false;
        this.twoReleased = true;
        break;
    }
  }

  /**
   * Updates the state after each frame.
   */
  afterFrame() {
    if (this.enterPressed) {
      this.enterPressedPreviousFrame = true;
    }
    else if (this.enterReleased) {
      this.enterPressedPreviousFrame = false;
    }

    if (this.onePressed) {
      this.onePressedPreviousFrame = true;
    }
    else if (this.oneReleased) {
      this.onePressedPreviousFrame = false;
    }

    if (this.twoPressed) {
      this.twoPressedPreviousFrame = true;
    }
    else if (this.twoReleased) {
      this.twoPressedPreviousFrame = false;
    }
  }
}
