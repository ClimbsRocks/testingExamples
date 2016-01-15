var mocha = require('mocha');
var expect = require('chai').expect;
var mathObj = require('./mathLogic.js');
var asyncFile = require('./asyncLogic.js');

describe('this is our outer describe block', function() {

  describe('basic example', function() {

    it('should multiply two positive numbers together',function() {

      expect(mathObj.multiply(8,4)).to.equal(32);
    });

    it('should return the remainder from dividing two numbers', function() {

      expect(mathObj.remainder(8,7)).to.equal(1);
    });

    it('should return the cube root of positive numbers', function() {

      expect(mathObj.cubeRoot(8)).to.equal(2);
    });

  });

  describe('testing asynch functions', function() {

    var fileData;

    before(function(done) {
      asyncFile(function(data) {
        fileData = data;
        done();

      });
    });

    it('should have read in our helloWorld.txt file', function(done) {
      aynchFunc(function() {
        expect(fileData).to.equal("'hello marvelous world'");
        done();
        
      });

    });

  });



});
