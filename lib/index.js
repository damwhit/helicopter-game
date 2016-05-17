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
    this.y += 2;
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
}


var copter1 = new Copter(200, 280, 20, 20);

copter1.draw();

var boundaries = [];

boundaries.push(new Boundary(0, 50, 800, 20));
boundaries.push(new Boundary(0, 550, 800, 20));
// boundaries.push(new Boundary(0, 50, 20, 500));

var obstacles = [];
obstacles.push(new Obstacle(700, 50, 20, 100));
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
    // context.clearRect(20, 20, canvas.width, canvas.height);
    if (obstacle.x === 0) {
      obstacle.x = 900;
    }
    obstacle.draw().move();
  });
  requestAnimationFrame(gameLoop);
});



// requestAnimationFrame(function gameLoop() {
//   requestAnimationFrame(gameLoop);
// });


// es5 syntax:

// function Copter (x, y, width, height) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
// }
//
// Copter.prototype.draw = function() {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// }
//
// var copter1 = new Copter(200, 280, 20, 20)
//
// copter1.draw()
