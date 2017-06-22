const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

exports.configure = driver => {
  chai.use(chaiAsPromised)
  chaiAsPromised.transferPromiseness = driver.transferPromiseness
  return chai.should()
}
