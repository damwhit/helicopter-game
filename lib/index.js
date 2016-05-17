var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Copter{
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  };

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    return this;
  }


};

var copter1 = new Copter(200, 280, 20, 20)

copter1.draw()

// es5 syntax:

// function Copter (x, y, width, height) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
// }
//
// Copter.prototype.draw = function() {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// }
//
// var copter1 = new Copter(200, 280, 20, 20)
//
// copter1.draw()
