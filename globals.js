'use strict';

var game;
var context2d;

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

  setInterval(update, 1000 / game.fps);
}

function update() {
  game.update();
  game.draw();
}
