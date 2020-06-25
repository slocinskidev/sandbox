import React, { useEffect } from 'react';
import useSetState from './hooks/useSetState';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [state, setState] = useSetState({ name: 'Jan' });

  useEffect(() => {
    setState({ surname: 'Słociński', name: 'Eryk' });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{`${state.name} ${state.surname}`}</p>
      </header>
    </div>
  );
};

export default App;
