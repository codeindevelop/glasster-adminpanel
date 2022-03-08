import { combineReducers } from 'redux';
import post from './PostReducer';
import postCategory from './postCategoryReducer';
import publish from './publishStatusReducer';

const postReducers = combineReducers({
  post,
  postCategory,
  publish,
});

export default postReducers;
