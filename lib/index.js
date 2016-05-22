var $ = require('jquery');
const Game = require('./game');

$('.game-canvas').hide();
$('.end-game').hide();
$('#copter-pic').hide();
$('#cloud-pic').hide();
$('#danger-zone').hide();

var dangerZone = document.getElementById('danger-zone');
var game = new Game(dangerZone);
game.stopSong();

$('.button').on('click', function (event) {
  event.preventDefault();
  $('#start-button').hide();
  $('.game-canvas').show();
  var game2 = new Game(dangerZone);
  game2.start();
});
