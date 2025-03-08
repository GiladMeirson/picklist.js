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
<dropdown-list id="myDropdown" placeholder="Search..."></dropdown-list>
```

### 3. Initialize with Items
```javascript
const dropdown = document.getElementById('myDropdown');
dropdown.setItems([
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
For complete documentation, visit: https://giladmeirson.github.io/picklist.js/documentation.html

## 🛠️ API Reference

### Attributes

- `placeholder`: Sets the input placeholder text
  ```html
  <dropdown-list placeholder="Search items..."></dropdown-list>
  ```

### Methods

- `setItems(items)`: Sets the dropdown items and their associated keywords
  ```javascript
  dropdown.setItems([
    {
      value: 'Display Text',
      keywords: ['keyword1', 'keyword2']
    }
  ]);
  ```

### Events

- `dropdown-select`: Fired when an item is selected
  ```javascript
  dropdown.addEventListener('dropdown-select', (e) => {
    console.log('Selected:', e.detail.value);
    console.log('Keywords:', e.detail.keywords);
  });
  ```

- `dropdown-input`: Fired when the input value changes
  ```javascript
  dropdown.addEventListener('dropdown-input', (e) => {
    console.log('Input value:', e.detail.value);
  });
  ```

## 🎨 Styling

The component comes with beautiful default styling but can be easily customized:

```css
dropdown-list {
    max-width: 400px;
    margin: 20px;
}
```

## 🌟 Examples

### Basic Usage
```html
<dropdown-list id="simpleList" placeholder="Select an option..."></dropdown-list>
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
<dropdown-list id="multiLangList" placeholder="Search fruits..."></dropdown-list>
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