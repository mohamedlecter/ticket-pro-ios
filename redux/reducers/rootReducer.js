import { combineReducers } from "redux";
import userReducer from "./user";
import ticketsReducer from "./tickets";

const rootReducer = combineReducers({
  userReducer,
  ticketsReducer,
});

export default rootReducer;
