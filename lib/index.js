var $ = require('jquery');
const Game = require('./game');

$('.game-canvas').hide();
$('.end-game').hide();
$('#copter-pic').hide();
$('#cloud-pic').hide();

$('.button').on('click', function (event) {
  event.preventDefault();
  $('#start-button').hide();
  $('.game-canvas').show();
  var game = new Game();
  game.start();
});
