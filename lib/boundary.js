var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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

  move() {
    this.x -= 5;
  }

  shuffleBoundary() {
    var direction = 1;
    if(this.y > 300) {
      direction = -1;
    }
    this.height = Math.floor((Math.random() * (100 * direction)) + (20 * direction));
  }
}

module.exports = Boundary;
