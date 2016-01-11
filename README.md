# aurelia-hammer

This is a [Aurelia](http://www.aurelia.io/) plugin providing the `hammer-swipe` Custom Attribute.
It uses [HammerJS](http://hammerjs.github.io/) to detect the gesture.

`swipe` is the only gesture supported at the moment. If you need another, feel free to open an issue or send a PR.

## Installation
`jspm install github:benib/aurelia-hammer`

Then load like this in your apps configure function:
```js
aurelia.use
  //...
  .plugin('benib/aurelia-hammer')
  //...
```

## Usage
In your View
```html
<div hammer-swipe.call="handleSwipe($event)">
</div>
```
In your View Model
```js
handleSwipe($event) {
  if ($event.direction === 'left') {
    
  } else if ($event.direction === 'right') {
    
  }
  // here you have $event.hammerEvent holding the original event from HammerJS.
}
```
