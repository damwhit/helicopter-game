class Obstacle {
  constructor(x, y, width, height, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
  }

  draw() {
    this.context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= 5;
  }

  shuffleObstacle() {
    this.y = Math.floor((Math.random() * (450 - 20)) + 20);
    this.height = Math.floor((Math.random() * (120 - 90)) + 90);
  }
}

module.exports = Obstacle;
