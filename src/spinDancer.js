//what we want dancer to do



var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;


SpinDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();

  // this.$node.removeClass('dancer');
  // this.$node.addClass('spin');
  this.$node.addClass('rotate');
  // this.$node.toggleClass('rotate');
  // https://api.jqueryui.com/shake-effect/
};
