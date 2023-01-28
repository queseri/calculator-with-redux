import React from "react";
import reactLogo from "./assets/react.svg";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  divide,
  incremented,
  multiply,
  subtracted,
} from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented(1));
  }

  function handleSubtract() {
    dispatch(subtracted(2));
  }

  function handleMultiply() {
    dispatch(multiply(7));
  }

  function handleDivide() {
    dispatch(divide(2));
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <div className="card">
        <button onClick={handleClick}>Add (+) </button>
        <button onClick={handleSubtract}>Subtract (-)</button>
        <button onClick={handleDivide}>divide (/)</button>
        <button onClick={handleMultiply}>Multiply(*)</button>
      </div>
    </div>
  );
}

export default App;
