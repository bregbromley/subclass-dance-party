var makeHeartBeatDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer">♥️</span>');
  this.$node.addClass('heartBeat');
};

makeHeartBeatDancer.prototype = Object.create(makeDancer.prototype);
makeHeartBeatDancer.prototype.constructor = makeDancer;

makeHeartBeatDancer.prototype.step = function() {
  this.$node = $('<span class="dancer"><img src="heart.png" width="35" height="35"</span>');
  makeDancer.prototype.step.call(this);

};
