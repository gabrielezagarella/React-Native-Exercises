import { combineReducers } from "redux";
import bookmarkReducer from "./bookmarkReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
  bookmarkReducer,
  accountReducer,
});
