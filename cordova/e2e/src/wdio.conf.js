/* global browser */

exports.config = {
  host: 'localhost',
  port: 4723,
  specs: ['./src/tests/**/*.js'],
  capabilities: require('./helpers/caps'),
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec'],
  before: () => {
    const chai = require('chai')
    global.expect = chai.expect
    chai.should()

    browser.context(browser.contexts().value[1])
  }
}
