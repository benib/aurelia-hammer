'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.configure = configure;

function configure(frameworkConfig) {
  frameworkConfig.globalResources('./hammer-swipe');
  frameworkConfig.globalResources('./hammer-press');
  frameworkConfig.globalResources('./hammer-hold');
}