import { useState } from 'react';

const useSetState = initialState => {
  const [state, setState] = useState(initialState);

  const setPartialState = newState => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  return [state, setPartialState];
};

export default useSetState;
