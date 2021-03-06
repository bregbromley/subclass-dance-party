// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   // var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;

//   // dancer.step = function() {
//   //   // the basic dancer doesn't do anything interesting at all on each step,
//   //   // it just schedules the next step
//   //   setTimeout(dancer.step, timeBetweenSteps);

//   // };
//   // dancer.step();

//   // dancer.setPosition = function(top, left) {
//   //   // Use css top and left properties to position our <span> tag
//   //   // where it belongs on the page. See http://api.jquery.com/css/
//   //   //
//   //   var styleSettings = {
//   //     top: top,
//   //     left: left
//   //   };
//   //   dancer.$node.css(styleSettings);
//   // };


//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

//   // return dancer;
// };

// makeDancer.prototype.setPosition = function( /* top, left */) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: this.top,
//     left: this.left
//   };
//   this.$node.css(styleSettings);
// };

// makeDancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(function() {
//     this.step();
//   }, this.timeBetweenSteps);
// };

// // TODO: makes sure these method's are correctly invoked

// // instantiation
// var dancer = new makeDancer(1, 2, 1000);
// dancer.step();
// dancer.setPosition();


var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};

Dancer.prototype.step = function() {
  var that = this;
  var func = function() {
    that.step();
  };
  var time = this.timeBetweenSteps;
  setTimeout(func, time);
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  for (var i = 0; i < window.dancers.length; i++) {
    console.log(window.dancers[i]);
  }
};