var HeartBeatDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="dancer">♥️</span>');
  this.$node.addClass('heartBeat');
};

HeartBeatDancer.prototype = Object.create(Dancer.prototype);
HeartBeatDancer.prototype.constructor = HeartBeatDancer;

HeartBeatDancer.prototype.step = function() {
  this.$node = $('<span class="dancer"><img src="heart.png" width="35" height="35"</span>');
  Dancer.prototype.step.call(this);

};
