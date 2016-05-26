const assert = require('chai').assert;
const PowerUp = require('../lib/powerUp');

describe('PowerUp', function() {
  context('with default attributes', function() {
    var powerUp = new PowerUp({}, 0, 0, 10, 10);

    it('should assign an x coordinate', function() {
      assert.equal(powerUp.x, 0);
    });

    it('should assign a y coordinate', function() {
      assert.equal(powerUp.y, 0);
    });

    it('should assign a height', function(){
      assert.equal(powerUp.height, 10);
    });

    it('should assign a width', function(){
      assert.equal(powerUp.width, 10);
    });
  });

  describe('#move', function() {
    it('should move x coordinate by 5', function(){
      var xcoord = 10;
      var powerUp = new PowerUp(xcoord, 0, 10, 10);
      powerUp.move();
      assert.equal(powerUp.x, -5);
    });
  });

  describe('#shufflePowerUp', function() {
    it('should assign random height between 70 and 120 and y between 80 and 450', function(){
      var powerUp = new PowerUp(0, 20, 10, 10);
      powerUp.shufflePowerUp();
        assert.isAbove(powerUp.y, 79);
        assert.isBelow(powerUp.y, 451);
    });
  });
});
