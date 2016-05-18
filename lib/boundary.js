class Boundary {
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

  shuffleBoundary() {
    var direction = 1;
    if(this.y > 300) {
      direction = -1;
    }
    this.height = Math.floor((Math.random() * (100 * direction)) + (20 * direction));
  }
}

module.exports = Boundary;
