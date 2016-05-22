var $ = require('jquery');
const Copter = require('./copter');
const Obstacle = require('./obstacle');
const Boundary = require('./boundary');

class Game {
  constructor(song) {
    this.status ='active';
    this.song = song;
  }

  stopSong() {
    this.song.pause();
    this.song.currentTime = 0;
  }

  start() {
    $('.end-game').hide();
    var canvas = document.getElementById('game');
    var copterImg = document.getElementById("copter-pic");
    var cloudImg = document.getElementById("cloud-pic");

    var context = canvas.getContext('2d');
    var copter1 = new Copter(copterImg, 200, 280, 60, 40, context);
    $('#end-game').hide();

    copter1.draw();

    var boundaries = [];

    for (var i = 0; i < 4; i++) {
      boundaries.push(new Boundary((i * 225), -150, 225, 225, context, this, cloudImg));
    }
    for (var j = 0; j < 18; j++) {
      boundaries.push(new Boundary((j * 50), 580, 50, 120, context, this));
    }

    var obstacles = [];
    obstacles.push(new Obstacle(3400, 400, 20, 100, context, this));
    obstacles.push(new Obstacle(3100, 90, 20, 120, context, this));
    obstacles.push(new Obstacle(2800, 250, 20, 120, context, this));

    var that = this;

    var score = 0;
    window.requestAnimationFrame(function gameLoop() {
      if (that.status === 'active') {
        that.song.play();
        $('.score-count').html(score++);
        context.clearRect(0, 0, canvas.width, canvas.height);
        copter1.draw().gravity();
        boundaries.forEach(function(boundary){
          boundary.draw().move();
          if (boundary.x === -100) {
            boundary.x = 800;
            boundary.shuffleBoundary();
          }
          copter1.checkForCollision(boundary);
          });

        obstacles.forEach(function(obstacle){
          obstacle.draw().move();
        if (obstacle.x === 0) {
          obstacle.x = 900;
          obstacle.shuffleObstacle();
        }
        copter1.checkForCollision(obstacle);
        });
        if (copter1.status === 'crashed') {
          copter1.crash(score);
          that.stopSong();
        }
        requestAnimationFrame(gameLoop);
      }
    });

    window.addEventListener('keypress', function (event) {
      event.preventDefault();
      if (event.keyCode === 32) {
        copter1.upLift();
      }
    });
  }
}

module.exports = Game;
