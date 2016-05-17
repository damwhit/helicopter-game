var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

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

module.exports = Obstacle;
