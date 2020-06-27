import React from 'react';
import useSetState from './hooks/useSetState';

const App = () => {
  const [state, setState] = useSetState(
    {
      count: 0, // Initial value of counter
      isLoading: false // Initial value of loading
    },
    // Callback is optional
    () => {
      console.log(state.count);
      console.log(state.isLoading);
    }
  );

  const increment = () => {
    setState(
      {
        count: state.count + 1
      },
      () => {
        console.log('Callback value: ', state.count);
      }
    );
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
        {state && console.log(state)}
      </div>
    </div>
  );
};

export default App;
