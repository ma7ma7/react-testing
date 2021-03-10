import { combineReducers } from "redux";
import commentsReducer from "./comment";

export default combineReducers({
  comments: commentsReducer,
});
