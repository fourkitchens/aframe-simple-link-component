## aframe-simple-link-component

[![Version](http://img.shields.io/npm/v/aframe-simple-link-component.svg?style=flat-square)](https://npmjs.org/package/aframe-simple-link-component)
[![License](http://img.shields.io/npm/l/aframe-simple-link-component.svg?style=flat-square)](https://npmjs.org/package/aframe-simple-link-component)

A simpler link component that doesn&#39;t create portal views.

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-simple-link-component/dist/aframe-simple-link-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity simple-link="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-simple-link-component
```

Then require and use.

```js
require('aframe');
require('aframe-simple-link-component');
```
