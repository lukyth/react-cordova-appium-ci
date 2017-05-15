#!/bin/zsh -e

cd `dirname $0`
npm run build
npm run test