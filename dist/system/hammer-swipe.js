System.register(['aurelia-framework', 'hammerjs'], function (_export) {
  'use strict';

  var inject, customAttribute, Hammer, HammerSwipeCustomAttribute;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_hammerjs) {
      Hammer = _hammerjs['default'];
    }],
    execute: function () {
      HammerSwipeCustomAttribute = (function () {
        function HammerSwipeCustomAttribute(element) {
          _classCallCheck(this, _HammerSwipeCustomAttribute);

          this.hammer = new Hammer.Manager(element, {
            recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]]
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
                case Hammer.DIRECTION_LEFT:
                  direction = 'left';
                  break;
                case Hammer.DIRECTION_RIGHT:
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
        HammerSwipeCustomAttribute = inject(Element)(HammerSwipeCustomAttribute) || HammerSwipeCustomAttribute;
        HammerSwipeCustomAttribute = customAttribute('hammer-swipe')(HammerSwipeCustomAttribute) || HammerSwipeCustomAttribute;
        return HammerSwipeCustomAttribute;
      })();

      _export('HammerSwipeCustomAttribute', HammerSwipeCustomAttribute);
    }
  };
});