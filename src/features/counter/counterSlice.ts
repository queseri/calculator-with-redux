import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    subtracted(state, action: PayloadAction<number>) {
      state.value -= action.payload;
    },
    multiply(state, action: PayloadAction<number>) {
      state.value *= action.payload;
    },
    divide(state, action: PayloadAction<number>) {
      if (action.payload === 0) {
        return;
      } else {
        state.value /= action.payload;
      }
    },
  },
});

export const { incremented, subtracted, multiply, divide } = counterSlice.actions;
export default counterSlice.reducer;
