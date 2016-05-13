# aurelia-hammer

This is a [Aurelia](http://www.aurelia.io/) plugin providing the `hammer-swipe` and `hammer-tap` and `hammer-press` and `hammer-hold` Custom Attributes.

It uses [HammerJS](http://hammerjs.github.io/) to detect the gesture.

`swipe`, `tap`, `press`, and `hold` are the only gestures supported at the moment. If you need another, feel free to open an issue or send a PR.

* **Swipe** - Captures left/right swipe gestures
* **Tap** - Captures when the pointer is down for up to 250ms without movement
* **Press** - Captures when the pointer is down for 251ms without movement
* **Hold** - Captures when the pointer is down for 1000ms without movement

## Installation
`jspm install github:benib/aurelia-hammer`

Then load like this in your apps configure function:
```js
aurelia.use
  //...
  .plugin('benib/aurelia-hammer')
  //...
```

## Swipe Usage
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

## Tap Usage

In your View
```html
<div hammer-tap.call="handleTap($event)">
</div>
```
In your View Model
```js
handleTap($event) {
  
  // here you have $event.hammerEvent holding the original event from HammerJS.
}
```


## Press Usage

In your View
```html
<div hammer-press.call="handlePress($event)">
</div>
```
In your View Model
```js
handlePress($event) {
  
  // here you have $event.hammerEvent holding the original event from HammerJS.
}
```

## Hold Usage

In your View
```html
<div hammer-hold.call="handleHold($event)">
</div>
```
In your View Model
```js
handleHold($event) {
  
  // here you have $event.hammerEvent holding the original event from HammerJS.
}
```

