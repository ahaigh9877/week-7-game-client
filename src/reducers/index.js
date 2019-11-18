import { combineReducers } from "redux";
import users from "./users";
import loggedin from "./loggedin";

export default combineReducers({
  users,
  loggedin
});
