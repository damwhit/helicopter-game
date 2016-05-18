const expect = require('chai').assert;
const Boundary = require('../lib/boundary');

describe('Boundary', function() {
  context('with default attributes', function() {
    var boundary = new Boundary(0, 0, 10, 10);

    it('should assign an x coordinate', function() {
      expect.equal(boundary.x, 0);
    });

    it('should assign a y coordinate', function() {
      expect.equal(boundary.y, 0);
    });

    it('should assign a height', function(){
      expect.equal(boundary.height, 10);
    });

    it('should assign a width', function(){
      expect.equal(boundary.width, 10);
    });
  });

  describe('#move', function() {
    it('should move x coordinate by 5', function(){
      var xcoord = 10;
      var boundary = new Boundary(xcoord, 0, 10, 10);
      boundary.move();
      expect.equal(boundary.x, 5);
    });
  });

  describe('#shuffleBoundary', function() {
    it('should assign random height between 0 and 10', function(){
      var boundary = new Boundary(0, 20, 10, 10);
      boundary.shuffleBoundary();
      for ( var i = 0; i < 10; i++) {
        expect.isAbove(boundary.height, 20);
        expect.isBelow(boundary.height, 100);
      }
    });
  });
});
