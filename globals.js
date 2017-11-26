'use strict';

// globals.js should be included last
var persistence = new Persistence();
var showHitboxes = persistence.getBoolean('show_hitboxes');

var game;
var context2d;
var keyboard;
var sounds;
var imageManager;

/**
 * Sets up the HTML page and instantiates the game object.
 */
function createGame() {
  game = new Game();

  var rootDiv = document.getElementById('game');
  var canvas = document.createElement('canvas');
  canvas.width = game.width;
  canvas.height = game.height;
  context2d = canvas.getContext('2d');
  rootDiv.appendChild(canvas);

  keyboard = new Keyboard();
  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);

  sounds = new Sounds;
  imageManager = new ImageManager();

  setInterval(update, 1000 / game.fps);
}

/**
 * Handles the keydown event.
 * @param evt - The keydown event object.
 */
function keydown(evt) {
  keyboard.keydown(evt);
}

/**
 * Handles the keyup event.
 * @param evt - The keyup event object.
 */
function keyup(evt) {
  keyboard.keyup(evt);
}

/**
 * Runs the game loop.
 */
function update() {
  game.update();
  game.draw();
}
