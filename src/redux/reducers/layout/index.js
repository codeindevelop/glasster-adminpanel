import { combineReducers } from "redux";
import { mainMenu } from "./mainMenuReducer";
import { config } from "./config";

const layoutReducers = combineReducers({
  config,
  mainMenu,
});

export default layoutReducers;
