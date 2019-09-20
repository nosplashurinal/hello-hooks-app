import { createStore } from "redux";
import createRootReducer from "./reducers";


const configureStore = (initialState = {}, history) => {
  const rootReducer = createRootReducer(history);
  const store = createStore(rootReducer, initialState);
  return store;
};

export default configureStore;
