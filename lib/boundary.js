const PowerUp = require('./powerUp');

class Boundary {
  constructor(x, y, width, height, context, game, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
    this.game = game || {};
    this.image = image || null;
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= 5;
  }

  increaseSpeed() {
    this.x = this.x -= 2;
  }

  decreaseSpeed() {
    this.speed = this.speed -= 2;
  }

  shuffleBoundary() {
    if(this.y < 300) {
      this.y = Math.floor((Math.random() * ((0) - (-50))) + (-50) );
    } else {
      this.y = Math.floor((Math.random() * (580 - 510)) + 510 );
    }
  }
  isPowerUp(collider) {
    return collider instanceof PowerUp;
  }
}

module.exports = Boundary;
