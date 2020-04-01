describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should ', function() {
    expect().to.be.an.instanceof();
  });

  it('should ', function() {

    expect().to.be.true;
  });

  describe('dance', function() {
    it('should ', function() {
      sinon.spy(blinkyDancer, 'step');
      expect().to.be.equal();

      expect().to.be.equal();

      expect().to.be.equal();
    });
  });
});
