
var ScardyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node.addClass('scardyDancer').prepend("<img src='scardy.png' height=100px width=150px/>");

};

ScardyDancer.prototype = Object.create(Dancer.prototype);
ScardyDancer.prototype.constructor = ScardyDancer;


ScardyDancer.prototype.step = function() {
  this.$node = $('<span class="dancer scardyDancer"><img src="scardy.png" width="50" height="50"</span>');
  Dancer.prototype.step.call(this);
};

//