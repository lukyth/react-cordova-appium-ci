# React Cordova Appium CI
A POC for React-Cordova app's CI/CD flow using CircleCI.

*TODO*
- [ ] E2E for iOS
- [ ] Improve the doc

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

## Setup E2E Test Machine (Mac OS)

### Prerequisite
- Nodejs
- Android Studio

### Install dependencies
```bash
npm install -g appium appium-doctor cordova
cd cordova/e2e
npm install
```

Make sure you get all pass from `appium-doctor`.

### Add cordova platforms
```bash
cd cordova
cordova platform add android@6.2.1
```
Neet to fix the version because there's a bug on the latest version.

### Apply patches for crosswalk
```bash
cd cordova/e2e
cp patches/chromedriver ${GLOBAL_NODE_MODULES_DIR}/appium-chromedriver/chromedriver/mac/chromedriver
cp patches/webview-helpers.js ${GLOBAL_NODE_MODULES_DIR}/appium-android-driver/build/lib/webview-helpers.js
```

### Left these process run
```bash
appium
${PATH_TO_ANDROID_SDK}/tools/emulator -avd Nexus_5X_API_25_GPU
ssh -fN -R ${PROXY_MACHINE_IP}:${PORT_FOR_SSH_TUNNEL}:localhost:22 ${TEST_MACHINE_USER}@${PROXY_MACHINE_IP}
```

## Setup Proxy Machine
```bash
sudo ufw allow OpenSSH
sudo ufw allow ${PORT_FOR_SSH_TUNNEL}
sudo ufw enable
```
Set `GatewayPorts` in `/etc/ssh/sshd_config` to `clientspecified` then run

```bash
sudo systemctl restart sshd
```

## Setup CircleCI
- Add Proxy Machine's private key to CircleCI in SSH Permissions setting
- Add Environment Variables
  - REMOTE_SERVER -> E2E Test Machine's username and IP in format like `username@IP`
  - SSH_PORT -> Port for SSH Tunnel eg. `22222`

## FAQ
**Q:** `chromedriver not found`

**A:** Locate `appium-chromedriver` `${GLOBAL_NODE_MODULES_DIR}` then run

```bash
npm run build
```
---
**Q:** Android emulator show black screen.

**A:** Switch render method of emulator to CPU (GPU is faster and can run the test just fine).