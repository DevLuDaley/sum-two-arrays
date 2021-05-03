import chai from 'chai'
import addArrays from './addArrays.js'

// describe("Solution", function() {
//   const chai = require("chai");
//   const chai = chai;
  // const assert = chai.assert;
  
// Test.assertDeepEquals(addArrays([6,7], [6,7]), [ 1, 3, 4 ])

  
// });


describe("Solution", function() {
//   const chai = require("chai");
//   const chai = chai;
  const assert = chai.assert;
  
  it("test1", function() {
    assert.equal(addArrays("3hey5hello2hi"), true);
  });
  
  it("test2", function() {
    assert.equal(addArrays("4code13hellocodewars"), true);
  });
  
  it("test3", function() {
    assert.equal(addArrays("3hey5hello2hi5"), false);
  });
  
  it("test4", function() {
    assert.equal(addArrays("code4hello5"), false);
  });
  
  it("test5", function() {
    assert.equal(addArrays("1a2bb3ccc4dddd5eeeee"), true);
  });
  
  it("test6", function() {
    assert.equal(addArrays(""), true);
  });
  
});