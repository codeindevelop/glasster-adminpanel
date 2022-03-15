// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import auth from './auth';
import { roleReducer } from './role/rolesReducer';
import layout from './layout';
import postReducers from './post';
import settings from './settings';
import { mediaReducer } from './media/mediaReducer';
import { dashboardReducer } from './dashboard/dashboardReducer';

const rootReducer = combineReducers({
  auth,
  dashboard: dashboardReducer,
  role: roleReducer,
  post: postReducers,
  media: mediaReducer,
  settings,
  layout,
});

export default rootReducer;
