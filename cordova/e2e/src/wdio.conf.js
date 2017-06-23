/* global browser */

exports.config = {
  host: 'localhost',
  port: 4723,
  specs: ['./src/tests/**/*.js'],
  capabilities: require('./helpers/caps'),
  maxInstances: 1,
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec'],
  services: ['appium'],
  before: () => {
    const chai = require('chai')
    global.expect = chai.expect
    chai.should()

    browser.context(browser.contexts().value[1])
  }
}
