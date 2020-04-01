$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    /* `this` -> The DOM element with class="addDancerButton"

      `data-* attribute`
      jQuery.data( element )
        element
        Type: Element
        The DOM element to query for the data.

      window[dancerMakerFunctionName]
    */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(this);

    /* Calling .data() with no parameters returns a JavaScript object containing each stored value as a property.
       The object can be used directly to get data values (but note that property names originally containing dashes
       will have been modified as described below) */
    // console.log($(this).data());

    // console.log(dancerMakerFunctionName);
    // console.log(window[dancerMakerFunctionName]);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];


    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(), // .height() returns the current computed unit-less height value
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });




  // spin Dancer

  $('.addSpinDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // console.log(dancer.$node);
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });


  // heartBeatDancer

  $('.addHeartBeatDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    // console.log(dancer.$node);
    window.dancers.push(dancer.$node);
    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    console.log(window.dancers);
    var someVal = 70;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].addClass('lineUp');
      console.log(window.dancers[i]);
      var style = {
        float: 'left',
        left: 75
      };
      someVal += 40;
      window.dancers[i].css(style);
    }

    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // var dancerMakerFunction = window[dancerMakerFunctionName];

    // var dancer = new dancerMakerFunction(
    //   $('body').height() * Math.random(),
    //   $('body').width() * Math.random(),
    //   Math.random() * 1000
    // );
    // // console.log(dancer.$node);
    // window.dancers.push(dancer.$node);
    // $('body').append(dancer.$node);
  });

  $(document).on('click', function(event) {
    console.log(event.target.classlist);
  });

});

