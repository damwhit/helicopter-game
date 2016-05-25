var $ = require('jquery');
const Game = require('./game');

$('.game-canvas').hide();
$('.end-game').hide();
$('#copter-pic').hide();
$('#cloud-pic').hide();
$('#building-pic').hide();
$('#fireball-pic').hide();
$('#danger-zone').hide();
var dangerZone = document.getElementById('danger-zone');
var game = new Game(dangerZone);

game.stopSong();
game.sortAndDisplayScores();
$('.button').on('click', function () {
  $('#start-button').hide();
  $('.game-canvas').show();
  var nextGame = new Game(dangerZone);
  nextGame.start();
});
