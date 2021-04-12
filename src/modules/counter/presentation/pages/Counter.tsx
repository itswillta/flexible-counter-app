import React from 'react';
import useCounter from '../../application/services/useReactCounter';

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return <>
    <h1>This is the Counter page</h1>
    <p>The count is {count}</p>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => decrement(1)}>-</button>
  </>;
}
