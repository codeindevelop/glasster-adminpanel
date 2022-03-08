import { combineReducers } from 'redux';
import { authSettingsReducer } from './authSettingsReducer';

const settingsReducers = combineReducers({
  auth: authSettingsReducer,
});

export default settingsReducers;
