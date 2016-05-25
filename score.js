var $ = require('jquery');
// const Game = require('./game');


class Score {
  constructor() {
    this.scores = [];
  }

  storeScore(score){
    this.scores.push(score);
  }

  sortScores(){
    var sortedScores = this.scores.sort(function(a, b){return b-a;});
    $('#score').empty();
    for(var i = 0; i < sortedScores.length; i++) {
      $('#score').append(`<h5>Score: ${sortedScores[i] -1} </h5>`);
    }
  }
}
module.exports = Score;
