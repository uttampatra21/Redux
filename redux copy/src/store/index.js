import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterVal: 0,
  },
  reducers: {
    incriment: (state, action) => {
      state.counterVal++;
    },
    decrement: (state, action) => {
      state.counterVal--;
    },

    addition: (state, action) => {
      state.counterVal += action.payload.num;
    },
    subtraction: (state, action) => {
      state.counterVal -= action.payload.num;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterAction = counterSlice.actions;
export default counterStore;

/*const counterReducer = (store = INIT_VALUE, action) => {
  if (action.type === "INCRIMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECRIMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { counter: store.counter + action.payload.num };
  } else if (action.type === "SUBSTRACT") {
    return { counter: store.counter - action.payload.num };
  }
  return store;
};*/
// const INIT_VALUE = {
//   counter: 20,
// };
