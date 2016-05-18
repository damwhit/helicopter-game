var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Boundary {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  drawTop() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= 5;
  }

  shuffleBoundary() {
    // this.y = Math.floor((Math.random() * 450) + 20);
    this.height = Math.floor((Math.random() * 100) + 20);
  }
}

module.exports = Boundary;
