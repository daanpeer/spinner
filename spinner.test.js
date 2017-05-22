const sinon = require('sinon')
const { assert } = require('chai')
const spinner = require('./index')

describe('spinner', () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    this.clock.restore()
  });

  it('should start with an initial character', (done) => {
    spinner((char) => {
      assert.equal(char, '⠋')
      done()
    }, 100)
  })

  it('should tick each given milliseconds', (done) => {
    let i = 0
    spinner((char) => {
      if (i === 1) {
        assert.equal(char, '⠙')
        done()
      }
      
      i++
    }, 100)

    this.clock.tick(101)
  })

})
