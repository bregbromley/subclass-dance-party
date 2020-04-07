describe('heartBeatDancer', function() {

  it('heartBeatDancer should exist', function() {
    var heartBeatDancer = new HeartBeatDancer;
    expect(typeof heartBeatDancer).to.equal('object');
  });



  it('heartBeatDancer.step should be a function', function() {
    var heartBeatDancer = new HeartBeatDancer;
    expect(typeof heartBeatDancer.step).to.equal('function');
  });


});


// it('should have a function ', function() {
//   expect().to.be.an.instanceof();
// });

// it('should ', function() {

//   expect().to.be.true;
// });
