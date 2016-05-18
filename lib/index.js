const Copter = require('./copter');
const Obstacle = require('./obstacle');
const Boundary = require('./boundary');
var canvas = document.getElementById('game');

var context = canvas.getContext('2d');

var copter1 = new Copter(200, 280, 20, 20, context);
copter1.draw();

var boundaries = [];

for (var i = 0; i < 18; i++) {
  boundaries.push(new Boundary(400 + (i * 50), 0, 50, 20));
  boundaries.push(new Boundary(400 + (i * 50), 600, 50, -20));
}

var obstacles = [];
obstacles.push(new Obstacle(1400, 400, 20, 100));
obstacles.push(new Obstacle(1100, 60, 20, 120));
obstacles.push(new Obstacle(800, 250, 20, 120));


window.requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  copter1.draw().gravity();
  boundaries.forEach(function(boundary){
    if (boundary.x === -100) {
      boundary.x = 800;
      boundary.shuffleBoundary();
      }

    if (copter1.x < boundary.x + boundary.width &&
      copter1.x + copter1.width > boundary.x &&
      copter1.y < boundary.y + boundary.height &&
      copter1.height + copter1.y > boundary.y) {
        alert('game over');
      }
      boundary.draw().move();

  });

  obstacles.forEach(function(obstacle){
    if (obstacle.x === 0) {
      obstacle.x = 900;
      obstacle.shuffleObstacle();
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

window.addEventListener('keypress', function (event) {
  event.preventDefault();
  if (event.keyCode === 32) {
    copter1.upLift();
  }
});
