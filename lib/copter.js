var $ = require('jquery');
class Copter {
  constructor(image, x, y, width, height, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
    this.image = image;
    this.status = "flying" || {};
    this.downpull = 4;
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }

  gravity() {
    this.y += this.downpull;
  }

  upLift() {
  this.downpull = - 6;
  }

  crash() {
    $('.game-canvas').hide();
    $('.end-game').show();
  }

  checkForCollision(collider) {
    if (this.x < collider.x + collider.width &&
      this.x + this.width > collider.x &&
      this.y < collider.y + collider.height &&
      this.height + this.y > collider.y) {
      this.status = "crashed";
        collider.game.status = 'inactive';
      }
    }
}

module.exports = Copter;
