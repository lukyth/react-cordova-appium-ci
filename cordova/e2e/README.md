## Setup

### Installation
```
yarn
```

### Apply fix for crosswalk
```
cp patches/chromedriver node_modules/appium-chromedriver/chromedriver/mac/chromedriver
cp patches/webview-helpers.js node_modules/appium-android-driver/build/lib/webview-helpers.js
```

### Run test
```
npm run test
```