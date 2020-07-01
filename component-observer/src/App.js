import React from 'react';
import Observer from './Observer';
import './App.css';

function App() {
  return (
    <div>
      <section style={{ height: '100vh', backgroundColor: 'yellow' }}></section>
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

export default App;
