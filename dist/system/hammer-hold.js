System.register(['aurelia-framework', 'hammerjs'], function (_export) {
  'use strict';

  var inject, customAttribute, Hammer, HammerPressCustomAttribute;

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
      HammerPressCustomAttribute = (function () {
        function HammerPressCustomAttribute(element) {
          _classCallCheck(this, _HammerPressCustomAttribute);

          this.hammer = new Hammer.Manager(element, {
            recognizers: [[Hammer.Press, { time: 1000 }]]
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
        HammerPressCustomAttribute = inject(Element)(HammerPressCustomAttribute) || HammerPressCustomAttribute;
        HammerPressCustomAttribute = customAttribute('hammer-hold')(HammerPressCustomAttribute) || HammerPressCustomAttribute;
        return HammerPressCustomAttribute;
      })();

      _export('HammerPressCustomAttribute', HammerPressCustomAttribute);
    }
  };
});