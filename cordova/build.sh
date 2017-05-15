#!/bin/zsh -e

rm -rf www
cd ..
npm run build
cp -R build cordova/www
cd cordova
cordova build android --debug
cordova build ios --debug