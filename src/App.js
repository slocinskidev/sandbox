import React, { useEffect } from 'react';
import useSetState from './hooks/useSetState';

const App = () => {
  const [state, setState] = useSetState();

  useEffect(() => {
    setState({ surname: 'Nowak', name: 'Jan', gender: 'Male' });
    setState({ age: '24' });
    setState({ surname: 'Kowalski' });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>useSetState hook</h1>
      <strong>Preview in console</strong>
      {state && console.log(state)}
    </div>
  );
};

export default App;
