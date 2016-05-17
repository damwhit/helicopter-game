var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Copter{
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.y ++;
  };
};

class Boundary {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  };
};

class Obstacle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  };

  move() {
    this.x --;
  };
};


var copter1 = new Copter(200, 280, 20, 20)

copter1.draw()

var boundaries = [];

boundaries.push(new Boundary(0, 50, 800, 20))
boundaries.push(new Boundary(0, 550, 800, 20))

var obstacles = [];
obstacles.push(new Obstacle(800, 50, 20, 100))
obstacles.push(new Obstacle(1000, 250, 20, 120))



requestAnimationFrame(function gameLoop() {
  context.clearRect(20, 20, canvas.width, canvas.height)
  copter1.draw().move()
  boundaries.forEach(function(boundary){
    boundary.draw()
  });
  obstacles.forEach(function(obstacle){
    if (obstacle.x === 0) {
      obstacle.x = 900
    }
    obstacle.draw().move()
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
