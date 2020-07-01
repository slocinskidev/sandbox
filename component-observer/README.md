# `Observer.js`

React Component Observer using Intersection Observer API. When component is visible it adds a className .show to this.

## Usage

```jsx

import React from 'react';
import Observer from './Observer';
import './App.css';

function App() {
  return (
    <div>
     ... some code before
     
      <Observer options={{ threshold: 0.5 }}>
        <section
          style={{
            height: '100vh'
          }}
        ></section>
      </Observer>
      
    </div>
  );
}

```

## Options
```jsx

let options = {
  rootMargin: '0px',
  threshold: 1.0
}

```
