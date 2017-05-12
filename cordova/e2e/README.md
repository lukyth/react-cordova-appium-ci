## Setup

### Installation
```
yarn
```

### Apply fix for crosswalk
```
cp patches/chromedriver ${GLOBAL_NODE_MODULES_DIR}/appium-chromedriver/chromedriver/mac/chromedriver
cp patches/webview-helpers.js ${GLOBAL_NODE_MODULES_DIR}/appium-android-driver/build/lib/webview-helpers.js
```

### Run test
```
npm run test
```