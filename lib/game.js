var $ = require('jquery');
const Copter = require('./copter');
const Obstacle = require('./obstacle');
const Boundary = require('./boundary');
const PowerUp = require('./PowerUp');
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


class Game {
  constructor(song) {
    this.status ='active';
    this.song = song;
    this.copterImg = document.getElementById("copter-pic");
    this.cloudImg = document.getElementById("cloud-pic");
    this.fireballImg = document.getElementById("fireball-pic");
    this.buildingImg = document.getElementById("building-pic");
    this.background = new Image();
    this.background.src = "assets/images/sunset.png";
    this.copter = new Copter(this.copterImg, 200, 280, 80, 30, context);
    this.boundaries = [];
    this.obstacles = [];
    this.powerUps = [];
  }

  stopSong() {
    this.song.pause();
    this.song.currentTime = 0;
  }

  sortAndDisplayScores(){
    var scores = [];
    for(var i = 0; i < localStorage.length; i++) {
      scores.push(localStorage.getItem(localStorage.key(i)));
    }
    if (scores.length > 0) {
      var sortedScores = scores.sort(function(a, b){return b-a;});
      $('#score').empty();
      for(var j = 0; j < scores.length && j < 9; j++) {
        $('#score').append(`<h5>Score: ${sortedScores[j]} </h5>`);
      }
    }
  }

  createTopBoundaries() {
    for (var i = 0; i < 4; i++) {
      this.boundaries.push(new Boundary((i * 225), -0, 300, 100, context, this, this.cloudImg));
    }
  }

  createBottomBoundaries() {
    for (var j = 0; j < 18; j++) {
      this.boundaries.push(new Boundary((j * 50), 580, 50, 120, context, this, this.buildingImg));
    }
  }

  createObstacles() {
    this.obstacles.push(new Obstacle(this.fireballImg, 2800, 250, 80, 40, context, this));
  }

  createPowerUps() {
    this.powerUps.push(new PowerUp(1500, 250, 20, 20, context, this));
  }

  randomizeColliders(colliders, copter, score) {
    var that = this;
    colliders.forEach(function(collider){
      collider.draw().move();
      if (score !== 0 && score % 500 === 0) {
        collider.increaseSpeed();
      }
      if (obstacleLeftPage(collider)) {
        collider.x = 800;
        shuffleColliders(collider);
      }
      that.checkForCollision(collider);
    });
  }

  checkForCollision(collider) {
    if (this.copter.x < collider.x + collider.width &&
      this.copter.x + this.copter.width > collider.x &&
      this.copter.y < collider.y + collider.height &&
      this.copter.height + this.copter.y > collider.y) {
      if (!isPowerUp(collider)) {
        this.copter.status = "crashed";
        collider.game.status = 'inactive';
      } else {
        this.copter.status = "powered up";
        collider.clearPowerUp();
      }
    }
  }

  start() {
    $('.end-game').hide();
    this.copter.draw();
    this.createTopBoundaries();
    this.createBottomBoundaries();
    this.createObstacles();
    this.createPowerUps();

    var that = this;
    var score = 0;

    window.requestAnimationFrame(function gameLoop() {
      if (that.status === 'active') {
        that.song.play();
        context.drawImage(that.background, 0, 0, canvas.width, canvas.height);
        context.clearRect(0, 0, canvas.width, canvas.height);
        that.copter.draw().gravity();

        that.randomizeColliders(that.boundaries, that.copter, score);
        that.randomizeColliders(that.obstacles, that.copter, score);
        that.randomizeColliders(that.powerUps, that.copter, score);

        if (that.copter.status === 'crashed') {
          that.copter.crash();
          that.stopSong();
          localStorage.setItem('score#' + score, score);
          that.sortAndDisplayScores(score);
        }
        requestAnimationFrame(gameLoop);
        $('.score-count').html(score++);
      }
    });

    window.addEventListener('keydown', function (event) {
      event.preventDefault();
      if (event.keyCode === 32) {
        that.copter.upLift();
      }
    });

    window.addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 32) {
        that.copter.downpull = 3;
      }
    });
  }
}


function shuffleColliders(collider){
  if (isBoundary(collider)){
    collider.shuffleBoundary();
  } else if (isObstacle(collider)) {
    collider.shuffleObstacle();
  } else {
    collider.shufflePowerUp();
  }
}

function isBoundary(collider){
  return collider instanceof Boundary;
}

function isObstacle(collider){
  return collider instanceof Obstacle;
}
function isPowerUp(collider){
  return collider instanceof PowerUp;
}

function obstacleLeftPage(collider){
  return collider.x < -99;
}

module.exports = Game;
