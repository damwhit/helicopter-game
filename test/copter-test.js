const assert = require('chai').assert;
const Copter = require('../lib/copter');

describe('Copter', function() {
  context('with default attributes', function() {
    var img = 'img';
    var copter = new Copter(img, 0, 0, 10, 10);

    it('should assign an x coordinate', function() {
      assert.equal(copter.image, 'img');
    });

    it('should assign an x coordinate', function() {
      assert.equal(copter.x, 0);
    });

    it('should assign a y coordinate', function() {
      assert.equal(copter.y, 0);
    });

    it('should assign a height', function(){
      assert.equal(copter.height, 10);
    });

    it('should assign a width', function(){
      assert.equal(copter.width, 10);
    });
  });

  describe('#gravity', function() {
    it('should move y coordinate by 4', function(){
      var img = 'img';
      var ycoord = 1;
      var copter = new Copter(img, 0, ycoord, 10, 10);
      copter.gravity();
      assert.equal(copter.y, 5);
    });
  });

  describe('#upLift', function() {
    it('should move y coordinate by 6', function(){
      var img = 'img';
      var ycoord = 1;
      var copter = new Copter(img, 0, ycoord, 10, 10);
      copter.upLift();
      copter.gravity();
      assert.equal(copter.y, -5);
    });
  });

  describe('#checkForCollision', function() {
    it('should change copter status to crashed on impact', function(){
      var img = 'img';
      var ycoord = 495;
      var copter = new Copter(img, 0, ycoord, 10, 10);
      var boundary = new Boundary(0, 500, 200, 10);
      assert.equal(copter.status, "flying");
      copter.gravity();
      copter.checkForCollision(boundary);
      assert.equal(copter.status, "crashed");
    });
  });
});
