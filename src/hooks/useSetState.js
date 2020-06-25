import { useState } from 'react';

const useSetState = initialState => {
  const [state, setState] = useState(initialState);

  const setPartialState = newState => {
    setState({ ...state, ...newState });
  };

  return [state, setPartialState];
};

export default useSetState;
