// var $ = require('jquery');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Copter{
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  gravity() {
    this.y += 3;
  }

  upLift() {
    this.y = this.y - 20;
  }

  resetMomentum() {
    this.y = this.y ++;
  }
}

class Boundary {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }
}

class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= 5;
  }

  shuffle() {
    this.y = Math.floor((Math.random() * 450) + 20);
    this.height = Math.floor((Math.random() * 120) + 90);
  }
}


var copter1 = new Copter(200, 280, 20, 20);

copter1.draw();

var boundaries = [];

boundaries.push(new Boundary(0, 0, 800, 20));
boundaries.push(new Boundary(0, 580, 800, 20));

var obstacles = [];

obstacles.push(new Obstacle(1400, 400, 20, 100));
obstacles.push(new Obstacle(1100, 60, 20, 120));
obstacles.push(new Obstacle(800, 250, 20, 120));


window.addEventListener('keypress', function (event) {
  event.preventDefault();
  if (event.keyCode === 32) {
    copter1.upLift();
  }
});

window.requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  copter1.draw().gravity();
  boundaries.forEach(function(boundary){
    boundary.draw();
  });
  obstacles.forEach(function(obstacle){
    if (obstacle.x === 0) {
      obstacle.x = 900;
      obstacle.shuffle();
    }
    if (copter1.x < obstacle.x + obstacle.width &&
      copter1.x + copter1.width > obstacle.x &&
      copter1.y < obstacle.y + obstacle.height &&
      copter1.height + copter1.y > obstacle.y) {
        // collision detected!
        alert('game over');
      }
    obstacle.draw().move();
  });
  requestAnimationFrame(gameLoop);
});
