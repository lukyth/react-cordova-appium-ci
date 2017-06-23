const apps = require('./apps')

module.exports = [
  {
    browserName: '',
    deviceName: 'Nexus 5', // any value; Appium uses the first device from *adb devices*
    platformName: 'Android',
    app: apps.android.arm,
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
    app: apps.ios
  }
]
