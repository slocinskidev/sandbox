import { useState, useEffect } from 'react';

const useSetState = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  const setPartialState = newState => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  useEffect(() => {
    if (callback) {
      return callback(state);
    }
  }, [state, callback]);

  return [state, setPartialState];
};

export default useSetState;
