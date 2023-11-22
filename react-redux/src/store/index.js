import { createStore } from "redux";

const INIT_VALUE = {
  counter: 20,
};
const counterReducer = (store = INIT_VALUE, action) => {
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
};

const counterStore = createStore(counterReducer);

export default counterStore;
