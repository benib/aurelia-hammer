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

var HammerPressCustomAttribute = (function () {
  function HammerPressCustomAttribute(element) {
    _classCallCheck(this, _HammerPressCustomAttribute);

    this.hammer = new _hammerjs2['default'].Manager(element, {
      recognizers: [[_hammerjs2['default'].Press, { time: 1000 }]]
    });
    this.element = element;
  }

  _createClass(HammerPressCustomAttribute, [{
    key: 'attached',
    value: function attached() {
      this.hammer.on('press', this.handleSwipe.bind(this));
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.hammer.off('press', this.handleSwipe.bind(this));
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

  var _HammerPressCustomAttribute = HammerPressCustomAttribute;
  HammerPressCustomAttribute = (0, _aureliaFramework.inject)(Element)(HammerPressCustomAttribute) || HammerPressCustomAttribute;
  HammerPressCustomAttribute = (0, _aureliaFramework.customAttribute)('hammer-press')(HammerPressCustomAttribute) || HammerPressCustomAttribute;
  return HammerPressCustomAttribute;
})();

exports.HammerPressCustomAttribute = HammerPressCustomAttribute;