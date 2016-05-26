var $ = require('jquery');
const PowerUp = require('./PowerUp');

class Copter {
  constructor(image, x, y, width, height, context) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context || {};
    this.image = image;
    this.status = "normal";
    this.downpull = 4;
    this.bullet = new PowerUp(this.x, this.y, 40, 20, context, this);
  }

  draw() {
    this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    return this;
  }

  gravity() {
    this.y += this.downpull;
  }

  drawBullet() {
    this.bullet.y = this.y;
    this.bullet.draw();
  }

  shoot() {
    this.bullet.y = this.bullet.y;
    this.bullet.bulletSpeed = 5;
  }

  upLift() {
  this.downpull = - 6;
  }

  crash() {
    $('.game-canvas').hide();
    $('.end-game').show();
  }
}

module.exports = Copter;
