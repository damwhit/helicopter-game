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
    if(this.y < 300) {
      this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    return this;
  }

  move() {
    this.x -= 5;
  }

  increaseSpeed() {
    this.x = this.x -= 2;
  }

  shuffleBoundary() {
    if(this.y < 300) {
      this.y = Math.floor((Math.random() * ((-50) - (-150))) + (-150) );
    } else {
      this.y = Math.floor((Math.random() * (580 - 510)) + 510 );
    }
  }
}

module.exports = Boundary;
