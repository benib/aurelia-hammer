System.register(['aurelia-framework', 'hammerjs'], function (_export) {
  'use strict';

  var inject, customAttribute, Hammer, HammerTapCustomAttribute;

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
      HammerTapCustomAttribute = (function () {
        function HammerTapCustomAttribute(element) {
          _classCallCheck(this, _HammerTapCustomAttribute);

          this.hammer = new Hammer.Manager(element, {
            recognizers: [[Hammer.Tap]]
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
        HammerTapCustomAttribute = inject(Element)(HammerTapCustomAttribute) || HammerTapCustomAttribute;
        HammerTapCustomAttribute = customAttribute('hammer-tap')(HammerTapCustomAttribute) || HammerTapCustomAttribute;
        return HammerTapCustomAttribute;
      })();

      _export('HammerTapCustomAttribute', HammerTapCustomAttribute);
    }
  };
});