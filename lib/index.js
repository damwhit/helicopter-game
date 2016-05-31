var $ = require('jquery');
const Game = require('./game');

var $gameCanvas = $('.game-canvas')
$gameCanvas.hide();

$('.end-game').hide();
$('#copter-pic').hide();
$('#cloud-pic').hide();
$('#building-pic').hide();
$('#fireball-pic').hide();
$('#angry-bird-pic').hide();
$('#parachute-pic').hide();
$('#danger-zone').hide();
var dangerZone = document.getElementById('danger-zone');
var game = new Game(dangerZone);

game.stopSong();
game.sortAndDisplayScores();
$('.button').on('click', function () {
  $('#start-button').hide();
  $('.info').hide();
  $gameCanvas.show();
  var nextGame = new Game(dangerZone);
  nextGame.start();
});
