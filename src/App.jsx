import React, { useReducer } from 'react';

function reduce(state, action) {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  } else {
    return state;
  }
}

function Count() {
  const [value, dispatch] = useReducer(reduce, 0);

  function add() {
    dispatch({ type: "increment" });
  }

  function sub() {
    dispatch({ type: "decrement" });
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}

export default Count;
