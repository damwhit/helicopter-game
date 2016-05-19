class Boundary {
  constructor(x, y, width, height, context, game) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
    this.game = game || {};
  }

  draw() {
    this.context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }

  move() {
    this.x -= 5;
  }

  shuffleBoundary() {
    if(this.y < 300) {
      this.height = Math.floor((Math.random() * (100 - 20)) + 20 );
    } else {
      this.y = Math.floor((Math.random() * (580 - 530)) + 530 );
    }
  }
}

module.exports = Boundary;
