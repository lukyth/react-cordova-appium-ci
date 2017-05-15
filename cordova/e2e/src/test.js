const describe = require('mocha').describe
const before = require('mocha').before
const after = require('mocha').after
const it = require('mocha').it

require('./helpers/setup')

const wd = require('wd')

describe('android', function () {
  this.timeout(300000)
  const serverConfig = {
    host: 'localhost',
    port: 4723
  }
  const driver = wd.promiseChainRemote(serverConfig)
  require('./helpers/logging').configure(driver)

  before(() => driver
    .init({
      browserName: '',
      deviceName: 'any value; Appium uses the first device from *adb devices*',
      platformName: 'Android',
      app: '/Users/kanitkorn/Code/react-cordova-appium-ci/cordova/platforms/android/build/outputs/apk/android-x86-debug.apk',
      androidDeviceSocket: 'com.kanitkorn.reactcordova_devtools_remote',
      chromeOptions: {
        androidDeviceSocket: 'com.kanitkorn.reactcordova_devtools_remote'
      }
    })
    .setImplicitWaitTimeout(5000)
    .sleep(5000)
    .contexts()
    .then(context => driver.context(context[1]))
  )

  after(() => driver.quit())

  it('should find header elements', () => driver
    .elementByCss('.App-logo')
    .elementByCss('.App-header')
      .text().should.become('Welcome to React')
  )
})

describe('ios', function () {
  this.timeout(300000)
  const serverConfig = {
    host: 'localhost',
    port: 4723
  }
  const driver = wd.promiseChainRemote(serverConfig)
  require('./helpers/logging').configure(driver)

  before(() => driver
    .init({
      automationName: 'XCUITest',
      browserName: '',
      deviceName: 'iPhone 5s',
      platformName: 'iOS',
      app: '/Users/kanitkorn/Code/react-cordova-appium-ci/cordova/platforms/ios/build/emulator/ReactCordova.app'
    })
    .setImplicitWaitTimeout(5000)
    .sleep(5000)
    .contexts()
    .then(context => driver.context(context[1]))
  )

  after(() => driver.quit())

  it('should find header elements', () => driver
    .elementByCss('.App-logo')
    .elementByCss('.App-header')
      .text().should.become('Welcome to React')
  )
})
