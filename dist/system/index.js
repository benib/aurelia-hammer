System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(frameworkConfig) {
    frameworkConfig.globalResources('./hammer-swipe');
    frameworkConfig.globalResources('./hammer-tap');
    frameworkConfig.globalResources('./hammer-press');
    frameworkConfig.globalResources('./hammer-hold');
  }

  return {
    setters: [],
    execute: function () {}
  };
});