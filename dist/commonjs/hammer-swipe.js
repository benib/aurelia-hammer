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

var HammerSwipeCustomAttribute = (function () {
  function HammerSwipeCustomAttribute(element) {
    _classCallCheck(this, _HammerSwipeCustomAttribute);

    this.hammer = new _hammerjs2['default'].Manager(element, {
      recognizers: [[_hammerjs2['default'].Swipe, { direction: _hammerjs2['default'].DIRECTION_HORIZONTAL }]]
    });
    this.element = element;
  }

  _createClass(HammerSwipeCustomAttribute, [{
    key: 'attached',
    value: function attached() {
      this.hammer.on('swipe', this.handleSwipe.bind(this));
    }
  }, {
    key: 'detached',
    value: function detached() {
      this.hammer.off('swipe', this.handleSwipe.bind(this));
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
        var direction = undefined;
        switch (event.direction) {
          case _hammerjs2['default'].DIRECTION_LEFT:
            direction = 'left';
            break;
          case _hammerjs2['default'].DIRECTION_RIGHT:
            direction = 'right';
            break;
          default:
            direction = null;
            break;
        }
        this.callback.call(null, { direction: direction, hammerEvent: event });
      }
    }
  }]);

  var _HammerSwipeCustomAttribute = HammerSwipeCustomAttribute;
  HammerSwipeCustomAttribute = (0, _aureliaFramework.inject)(Element)(HammerSwipeCustomAttribute) || HammerSwipeCustomAttribute;
  HammerSwipeCustomAttribute = (0, _aureliaFramework.customAttribute)('hammer-swipe')(HammerSwipeCustomAttribute) || HammerSwipeCustomAttribute;
  return HammerSwipeCustomAttribute;
})();

exports.HammerSwipeCustomAttribute = HammerSwipeCustomAttribute;