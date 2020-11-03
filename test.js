const assert = require('assert')

describe('SimpleTest', function() {
  it('1足す1は2', function() {
    assert(1+1===2)
    assert.equal(1+1, 2)
  })
})
