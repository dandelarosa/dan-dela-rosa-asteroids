'use strict';

var persistence = new Persistence();
var showHitboxes = persistence.getBoolean('show_hitboxes', false);
var forceDefaultAssets = persistence.getBoolean('force_default_assets', false);

var game = new Game();
var context2d;
var keyboard = new Keyboard();
var audioManager = new AudioManager();
var imageManager = new ImageManager();
var stringsManager = new StringsManager();
var configManager = new ConfigManager();
var configAudioManager = new ConfigAudioManager();
var configImageManager = new ConfigImageManager();
var configStringsManager = new ConfigStringsManager();

window.addEventListener('load', function() {
  createGame();
});

/**
 * Sets up the HTML page and instantiates the game object.
 */
function createGame() {
  var rootDiv = document.getElementById('game');
  var canvas = document.createElement('canvas');
  canvas.width = game.width;
  canvas.height = game.height;
  context2d = canvas.getContext('2d');
  rootDiv.appendChild(canvas);

  document.addEventListener('keydown', keydown);
  document.addEventListener('keyup', keyup);

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
