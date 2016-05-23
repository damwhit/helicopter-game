var $ = require('jquery');
const Copter = require('./copter');
const Obstacle = require('./obstacle');
const Boundary = require('./boundary');
const Scores = [];
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Game {
  constructor(song) {
    this.status ='active';
    this.song = song;
    this.scores = [];
    this.copterImg = document.getElementById("copter-pic");
    this.cloudImg = document.getElementById("cloud-pic");
    this.copter = new Copter(this.copterImg, 200, 280, 60, 40, context);
    this.boundaries = [];
    this.obstacles = [];
  }

  stopSong() {
    this.song.pause();
    this.song.currentTime = 0;
  }

  sortScores(score){
    Scores.push(score);
    var sortedScores = Scores.sort(function(a, b){return b-a;});
    $('#score').empty();
    for(var i = 0; i < sortedScores.length; i++) {
      $('#score').append(`<h5>Score: ${sortedScores[i] -1} </h5>`);
    }
  }

  createTopBoundaries() {
    for (var i = 0; i < 4; i++) {
      this.boundaries.push(new Boundary((i * 225), -150, 225, 225, context, this, this.cloudImg));
    }
  }

  createBottomBoundaries() {
    for (var j = 0; j < 18; j++) {
      this.boundaries.push(new Boundary((j * 50), 580, 50, 120, context, this));
    }
  }

  createObstacles() {
    this.obstacles.push(new Obstacle(2800, 250, 20, 120, context, this));
  }

  start() {
    $('.end-game').hide();

    this.copter.draw();

    this.createTopBoundaries();
    this.createBottomBoundaries();
    this.createObstacles();

    var that = this;
    var score = 0;

    window.requestAnimationFrame(function gameLoop() {
      if (that.status === 'active') {
        that.song.play();
        $('.score-count').html(score++);
        context.clearRect(0, 0, canvas.width, canvas.height);
        that.copter.draw().gravity();
        that.boundaries.forEach(function(boundary){
          boundary.draw().move();
          if (boundary.x === -100) {
            boundary.x = 800;
            boundary.shuffleBoundary();
          }
          that.copter.checkForCollision(boundary);
          });

        that.obstacles.forEach(function(obstacle){
          obstacle.draw().move();
        if (obstacle.x === 0) {
          obstacle.x = 900;
          obstacle.shuffleObstacle();
        }
        that.copter.checkForCollision(obstacle);
        });
        if (that.copter.status === 'crashed') {
          that.copter.crash();
          that.stopSong();
          that.sortScores(score);
        }
        requestAnimationFrame(gameLoop);
      }
    });

    window.addEventListener('keypress', function (event) {
      event.preventDefault();
      if (event.keyCode === 32) {
        that.copter.upLift();
      }
    });
  }
}

module.exports = Game;
