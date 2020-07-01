# `useSetState`

React state hook that creates setState method which works like this.setState in class components. It merges previous state with new state and returning this state.

## Usage

```jsx
import useSetState from './hooks/useSetState';

  const [state, setState] = useSetState();
  
// It looks exactly like setState hook but It works like this.setState in class components.
  setState({ surname: 'Nowak', name: 'Jan', gender: 'Male' });
  setState({ age: '24' });
  setState({ surname: 'Kowalski' });
  
// Output: {surname: "Kowalski", name: "Jan", gender: "Male", age: "24"}
```
