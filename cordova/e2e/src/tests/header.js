/* global it, describe, browser */

describe('header', function () {
  this.timeout(300000)

  it('should find header elements', () => {
    browser.isVisible('.App-logo')
    browser.getText('.App-header')
      .should.be.equal('Welcome to React')
  })
})
