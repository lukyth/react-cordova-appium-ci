#!/bin/bash -e

cd `dirname $0`
cordova build android --debug
npm run test