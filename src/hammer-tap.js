import {inject, customAttribute} from 'aurelia-framework';
import Hammer from 'hammerjs';

@customAttribute('hammer-tap')
@inject(Element)
export class HammerTapCustomAttribute {

  constructor(element) {
    this.hammer = new Hammer.Manager(element, {
      recognizers: [
        [Hammer.Tap]
      ]
    });
    this.element = element;
  }

  attached() {
    this.hammer.on('tap', this.handleTap.bind(this));
  }

  detached() {
    this.hammer.off('tap', this.handleTap.bind(this));
  }

  valueChanged(newValue) {
    this.callback = newValue;
  }

  handleTap(event) {
    if (this.callback) {
      this.callback.call(null, { hammerEvent: event });
    }
  }
}
