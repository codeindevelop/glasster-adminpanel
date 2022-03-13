import { combineReducers } from 'redux';
import { mainMenu } from './mainMenuReducer';
import { config } from './config';
import { asideReducer } from './aside';

const layoutReducers = combineReducers({
  config,
  aside: asideReducer,
  mainMenu,
});

export default layoutReducers;
