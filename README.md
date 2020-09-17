# Darkmode Switcher

Simple way to toggle between dark or light mode based on the use of CSS custom property.
Default applied mode is the one corresponding to the user's preference.

## Installation

```shell
npm install @brtheo/darkmode-switcher --save
```
## Usage

By default the name of the toggling css class and the local storage key is `darkmode`.
You can change these names in each functions' parameters.

```css
:root {
  --bgcolor: var(--white)
}
.darkmode {
  --bgcolor: var(--black)
}
```

```javascript
// Main.js
import {initDarkmode} from './darkmode-switcher'
initDarkmode()

//myButton.js
import {switchDarkmode} from './darkmode-switcher'
handleClick = () => switchDarkmode()
```
