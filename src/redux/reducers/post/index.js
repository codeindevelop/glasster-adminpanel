import { combineReducers } from 'redux';
import { postReducer } from './PostReducer';
import { postCategoryReducer } from './postCategoryReducer';
import { publishStatusReducer } from './publishStatusReducer';

const postReducers = combineReducers({
  post: postReducer,
  postCategory: postCategoryReducer,
  publish: publishStatusReducer,
});

export default postReducers;
