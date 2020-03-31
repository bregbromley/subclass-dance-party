//what we want dancer to do



var makeSpinDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeSpinDancer.prototype = Object.create(makeDancer.prototype);
makeSpinDancer.prototype.constructor = makeDancer;


makeSpinDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();

  // this.$node.removeClass('dancer');
  // this.$node.addClass('spin');
  this.$node.addClass('rotate');
  // this.$node.toggleClass('rotate');
  // https://api.jqueryui.com/shake-effect/
};
