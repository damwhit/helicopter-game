class Obstacle {
  constructor(x, y, width, height, context, game) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
    this.game = game || {};
    this.speed = 5;
  }

  draw() {
    this.context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= this.speed;
  }

  increaseSpeed() {
    this.speed = this.speed += 2;
  }

  shuffleObstacle() {
    this.y = Math.floor((Math.random() * (450 - 80)) + 80);
    this.height = Math.floor((Math.random() * (120 - 70)) + 70);
  }
}

module.exports = Obstacle;
