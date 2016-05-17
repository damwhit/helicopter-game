var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Copter {
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

  gravity() {
    this.y += 2;
  }

  upLift() {
    this.y = this.y - 20;
  }

  resetMomentum() {
    this.y = this.y ++;
  }
}

module.exports = Copter;
