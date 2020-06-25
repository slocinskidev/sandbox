# `useSetState`

React state hook that creates setState method which works like this.setState in class components. It merges previous state with new state and returning this state.

## Usage

```jsx
import useSetState from './hooks/useSetState';

const App = () => {
  const [state, setState] = useSetState();

```
