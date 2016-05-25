const assert = require('chai').assert;
const Obstacle = require('../lib/obstacle');

describe('Obstacle', function() {
  context('with default attributes', function() {
    var obstacle = new Obstacle(0, 0, 10, 10);

    it('should assign an x coordinate', function() {
      assert.equal(obstacle.x, 0);
    });

    it('should assign a y coordinate', function() {
      assert.equal(obstacle.y, 0);
    });

    it('should assign a height', function(){
      assert.equal(obstacle.height, 10);
    });

    it('should assign a width', function(){
      assert.equal(obstacle.width, 10);
    });
  });

  describe('#move', function() {
    it('should move x coordinate by 5', function(){
      var xcoord = 10;
      var obstacle = new Obstacle(xcoord, 0, 10, 10);
      obstacle.move();
      assert.equal(obstacle.x, 5);
    });
  });

  describe('#shuffleObstacle', function() {
    it('should assign random height between 70 and 120 and y between 80 and 450', function(){
      var obstacle = new Obstacle(0, 20, 10, 10);
      obstacle.shuffleObstacle();
        assert.isAbove(obstacle.height, 69);
        assert.isBelow(obstacle.height, 450);
        assert.isAbove(obstacle.y, 79);
        assert.isBelow(obstacle.y, 451);
    });
  });
});
