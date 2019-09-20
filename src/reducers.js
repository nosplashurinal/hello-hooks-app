import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) => {
  const rootReducer = combineReducers({
    router: connectRouter(history)
  });
  return rootReducer;
};

export default createRootReducer;
