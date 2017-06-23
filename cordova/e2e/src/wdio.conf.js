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
  capabilities: [
    {
      browserName: '',
      deviceName: 'any value; Appium uses the first device from *adb devices*',
      platformName: 'Android',
      app: '/Users/kanitkorn/Code/react-cordova-appium-ci/cordova/platforms/android/build/outputs/apk/android-armv7-debug.apk',
      androidDeviceSocket: 'com.kanitkorn.reactcordova_devtools_remote',
      chromeOptions: {
        androidDeviceSocket: 'com.kanitkorn.reactcordova_devtools_remote'
      }
    },
    {
      automationName: 'XCUITest',
      browserName: '',
      deviceName: 'iPhone 5s',
      platformName: 'iOS',
      app: '/Users/kanitkorn/Code/react-cordova-appium-ci/cordova/platforms/ios/build/emulator/ReactCordova.app'
    }
  ],

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
