var rework = require('..');

describe('rework', function() {

  describe('.use() call function', function() {
    it('should call the plugin function', function() {
      var r = rework('body { color: red; }');
      var called = false;
      var result = r.use(function(sheet, instance) {
        sheet.should.have.property('rules');
        instance.should.equal(r);
      });

      result.should.equal(r);
    });
  });

  describe('.toString() compress option', function() {
    it('should compress the output', function() {
      rework('body { color: red; }')
        .toString({ compress: true })
        .should.equal('body{color:red;}');
    });
  });

});
