
var assert = require('assert');
var compact2string = require('./');
var Buffer = require("buffer").Buffer;
var bops = require('bops')

describe('compact2string', function() {

  it('should return expected', function() {
    assert.equal('10.10.10.5:65408', compact2string(new Buffer("0A0A0A05FF80", "hex")));
  });

  it('should return expected multi', function() {
    assert.deepEqual([ '10.10.10.5:128', '100.56.58.99:28525' ], compact2string.multi(new Buffer("0A0A0A05008064383a636f6d", "hex")));
  });

  it('should return expected (when using bops in browser)', function() {
    assert.equal('10.10.10.5:65408', compact2string(bops.from("0A0A0A05FF80", "hex")));
  })

});