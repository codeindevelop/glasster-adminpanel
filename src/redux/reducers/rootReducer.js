// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import auth from './auth';
import { roleReducer } from './role/rolesReducer';
import layout from './layout';
import postReducers from './post';
import settings from './settings';
import media from './media/mediaReducer';

const rootReducer = combineReducers({
  auth,
  role: roleReducer,
  post: postReducers,
  media,
  settings,
  layout,
});

export default rootReducer;
