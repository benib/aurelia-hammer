'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var HammerTapCustomAttribute = (function () {
  function HammerTapCustomAttribute(element) {
    _classCallCheck(this, _HammerTapCustomAttribute);

    this.hammer = new _hammerjs2['default'].Manager(element, {
      recognizers: [[_hammerjs2['default'].Tap]]
    });
    this.element = element;
  }

  _createClass(HammerTapCustomAttribute, [{
    key: 'attached',
    value: function attached() {
      this.hammer.on('press', this.handleTap.bind(this));
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.hammer.off('press', this.handleTap.bind(this));
    }
  }, {
    key: 'valueChanged',
    value: function valueChanged(newValue) {
      this.callback = newValue;
    }
  }, {
    key: 'handleSwipe',
    value: function handleSwipe(event) {
      if (this.callback) {
        this.callback.call(null, { hammerEvent: event });
      }
    }
  }]);

  var _HammerTapCustomAttribute = HammerTapCustomAttribute;
  HammerTapCustomAttribute = (0, _aureliaFramework.inject)(Element)(HammerTapCustomAttribute) || HammerTapCustomAttribute;
  HammerTapCustomAttribute = (0, _aureliaFramework.customAttribute)('hammer-tap')(HammerTapCustomAttribute) || HammerTapCustomAttribute;
  return HammerTapCustomAttribute;
})();

exports.HammerTapCustomAttribute = HammerTapCustomAttribute;