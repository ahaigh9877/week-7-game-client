import { combineReducers } from "redux";
import users from "./users";
import loggedin from "./loggedin";
import error from './error';
import rooms from './rooms'

export default combineReducers({
  error,
  rooms,
  users,
  loggedin
});
