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
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }

  gravity() {
    this.y += 4;
  }

  upLift() {
    this.y = this.y - 21;
  }

  crash(score) {
    $('.game-canvas').hide();
    $('.end-game').show();
    $('#score').append(`<h5>Score: ${score}</h5>`);
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
