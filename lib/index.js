const Copter = require('./copter');
const Obstacle = require('./obstacle');
const Boundary = require('./boundary');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var copter1 = new Copter(200, 280, 20, 20);
copter1.draw();

var boundaries = [];
boundaries.push(new Boundary(0, 0, 800, 20));
boundaries.push(new Boundary(0, 580, 800, 20));

var obstacles = [];
obstacles.push(new Obstacle(1400, 400, 20, 100));
obstacles.push(new Obstacle(1100, 60, 20, 120));
obstacles.push(new Obstacle(800, 250, 20, 120));


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
    obstacle.draw().move();
  });
  requestAnimationFrame(gameLoop);
});

window.addEventListener('keypress', function (event) {
  event.preventDefault();
  if (event.keyCode === 32) {
    copter1.upLift();
  }
});
