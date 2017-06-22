const { describe, before, after, it } = require('mocha')
const webdriverio = require('webdriverio')

const platforms = [
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
]

platforms.forEach(platform => {
  describe(platform.platformName, function () {
    this.timeout(300000)

    const driver = webdriverio.remote({
      host: 'localhost',
      port: 4723,
      logLevel: 'verbose',
      desiredCapabilities: platform
    })

    require('./helpers/setup').configure(driver)

    before(() => driver.init()
      .timeouts('implicit', 5000)
      .pause(5000)
      .contexts()
      .then(({ value: contexts }) => driver.context(contexts[1]))
    )

    after(() => driver.end())

    it('should find header elements', () => driver
      .isVisible('.App-logo')
      .getText('.App-header')
        .should.become('Welcome to React')
    )
  })
})
