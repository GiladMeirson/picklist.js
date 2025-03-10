# 🎯 Picklist.js

A lightweight custom web component that provides a smart, keyword-based autocomplete dropdown for seamless and dynamic user input. Part of the EZ.js family!

![npm bundle size](https://img.shields.io/badge/minified%20size-2.1%20kB-blue)
![npm](https://img.shields.io/badge/no-dependencies-brightgreen)
![JavaScript](https://img.shields.io/badge/vanilla-javascript-yellow)
![License](https://img.shields.io/badge/license-Apache--2.0-green)

## ✨ Features

- 🔍 Smart keyword-based search
- 🎨 Beautiful default styling with easy customization
- 📱 Fully responsive design
- 🌍 Multi-language support built-in
- ⚡ Lightweight (only 2.1kB minified)
- 🔌 Zero dependencies
- 🎯 Framework agnostic
- 🌐 Works with any modern browser
- 🎨 Shadow DOM for style encapsulation
- 🔄 Rich event system

## 🚀 Quick Start

### 1. Include the Script
```html
<script src="picklist.min.js"></script>
```

### 2. Add the Component
```html
<pick-list id="myPickList" placeholder="Search..."></pick-list>
```

### 3. Initialize with Items
```javascript
const pickList = document.getElementById('myPickList');
pickList.setItems([
    {
        value: 'Apple',
        keywords: ['fruit', 'red', 'sweet', 'תפוח'] // Support for multiple languages!
    },
    {
        value: 'Banana',
        keywords: ['fruit', 'yellow', 'tropical', 'בננה']
    }
]);
```

## 🎯 Why Picklist.js?

- **Smart Search**: Search through both visible text AND keywords
- **Multi-Language**: Perfect for international applications
- **Zero Dependencies**: No bloat, just pure JavaScript
- **Web Component**: Use with any framework or vanilla JS
- **Tiny Footprint**: Only 2.1kB minified
- **Modern UX**: Smooth animations and responsive design

## 📦 Installation Options

### Direct Download
Download `picklist.min.js` and include it in your project:
```html
<script src="path/to/picklist.min.js"></script>
```

### NPM
```bash
npm install picklist.js
```

### GitHub
```bash
git clone https://github.com/GiladMeirson/picklist.js.git
```

## Documentation
For complete documentation, visit: https://giladmeirson.github.io/picklist.js/pages/documentation.html

## 🛠️ API Reference

### Attributes

- `placeholder`: Sets the input placeholder text
  ```html
  <pick-list placeholder="Search items..."></pick-list>
  ```

### Methods

- `setItems(items)`: Sets the dropdown items and their associated keywords
  ```javascript
  pickList.setItems([
    {
      value: 'Display Text',
      keywords: ['keyword1', 'keyword2']
    }
  ]);
  ```

### Events

- `picklist-select`: Fired when an item is selected
  ```javascript
  pickList.addEventListener('picklist-select', (e) => {
    console.log('Selected:', e.detail.value);
    console.log('Keywords:', e.detail.keywords);
  });
  ```

- `picklist-input`: Fired when the input value changes
  ```javascript
  pickList.addEventListener('picklist-input', (e) => {
    console.log('Input value:', e.detail.value);
  });
  ```

## 🎨 Styling

The component comes with beautiful default styling but can be easily customized:

```css
pick-list {
    max-width: 400px;
    margin: 20px;
}
```

## 🌟 Examples

### Basic Usage
```html
<pick-list id="simpleList" placeholder="Select an option..."></pick-list>
<script>
    const list = document.getElementById('simpleList');
    list.setItems([
        { value: 'Option 1', keywords: ['one', 'first'] },
        { value: 'Option 2', keywords: ['two', 'second'] }
    ]);
</script>
```

### Multi-Language Support
```html
<pick-list id="multiLangList" placeholder="Search fruits..."></pick-list>
<script>
    const fruits = document.getElementById('multiLangList');
    fruits.setItems([
        {
            value: 'Apple',
            keywords: ['red', 'fruit', 'sweet', 'תפוח']
        },
        {
            value: 'Banana',
            keywords: ['yellow', 'fruit', 'בננה']
        }
    ]);
</script>
```

### Framework Integration Examples

#### React
```jsx
import 'picklist.js';

function App() {
  return (
    <pick-list 
      id="myPickList" 
      placeholder="Search..."
      onPickList-select={(e) => console.log(e.detail)}
    />
  );
}
```

#### Vue
```vue
<template>
  <pick-list 
    id="myPickList" 
    placeholder="Search..."
    @picklist-select="handleSelect"
  />
</template>

<script>
import 'picklist.js';
</script>
```

#### Angular
```typescript
// app.module.ts
import 'picklist.js';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

// component.html
<pick-list 
  id="myPickList" 
  placeholder="Search..."
  (picklist-select)="handleSelect($event)"
>
</pick-list>
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👥 Contributing

We love contributions! Please feel free to submit issues and Pull Requests at https://github.com/GiladMeirson/picklist.js

## 📄 License

Apache-2.0 License - see the repository for full license text.

## Author

Created by [Gilad Meirson](https://giladmeirson.site/) as part of the EZ.js family of web components.