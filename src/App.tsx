import React from "react";
import { Button, Card, Container, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import {
  divide,
  incremented,
  multiply,
  subtracted,
} from "./features/counter/counterSlice";
import "./App.css";
import Grid2 from "@mui/material/Unstable_Grid2";

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
      <Container>
        <Card variant="outlined" className="card">
          <Grid2 container spacing={2}>
            <Grid2 component={Button}  xs={3} onClick={(evt) => console.log(evt) }>7</Grid2>
            <Grid2 component={Button} xs={3}>8</Grid2>
            <Grid2 component={Button} xs={3}>9</Grid2>
            <Grid2 component={Button} xs={3}>del</Grid2>
            <Grid2 component={Button} xs={3}>4</Grid2>
            <Grid2 component={Button} xs={3}>5</Grid2>
            <Grid2 component={Button} xs={3}>6</Grid2>
            <Grid2 component={Button} xs={3} onClick={handleClick}>(+) </Grid2>
            <Grid2 component={Button} xs={3}>1</Grid2>
            <Grid2 component={Button} xs={3}>2</Grid2>
            <Grid2 component={Button} xs={3}>3</Grid2>
            <Grid2 component={Button} xs={3} onClick={handleSubtract}>(-)</Grid2>
            <Grid2 component={Button} xs={3}>.</Grid2>
            <Grid2 component={Button} xs={3}>0</Grid2>
            <Grid2 component={Button} xs={3} onClick={handleDivide}>(/)</Grid2>
            <Grid2 component={Button} xs={3} onClick={handleMultiply}>(*)</Grid2>
          </Grid2>
        </Card>
      </Container>
    </div>
  );
}

export default App;
