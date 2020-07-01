import React from 'react';
import useSetState from './hooks/useSetState';

const App = () => {
  const [state, setState] = useSetState({
    count: 0, // Initial value of counter
    isLoading: false // Initial value of loading
  });

  const increment = () => {
    setState({
      count: state.count + 1
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1>useSetState hook - counter example</h1>
        <p>You clicked {state.count} times</p>
        <p>Loading is: {String(state.isLoading)}</p>
        <button onClick={increment}>+</button>
        <button onClick={() => setState({ count: state.count - 1 })}>-</button>
        <button onClick={() => setState({ isLoading: !state.isLoading })}>
          Set loading
        </button>
      </div>
    </div>
  );
};

export default App;
