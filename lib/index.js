var $ = require('jquery');
const Game = require('./game');




$('.game-canvas').hide();
window.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("start it up");
  $('#start-game').hide();
  $('.game-canvas').show();
  var game = new Game();
  game.start();
});
