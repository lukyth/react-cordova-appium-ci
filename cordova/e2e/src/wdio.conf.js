/* global browser */

exports.config = {

  /**
   * server configurations
   */
  host: 'localhost',
  port: 4723,

  /**
   * specify test files
   */
  specs: [
    './src/test.js'
  ],

  /**
   * capabilities
   */
  capabilities: require('./helpers/caps'),

  /**
   * test configurations
   */
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 10000,
  framework: 'mocha',
  reporters: ['spec'],

  /**
   * hooks
   */
  before: function () {
    const chai = require('chai')
    global.expect = chai.expect
    chai.should()

    browser.context(browser.contexts().value[1])
  }
}
