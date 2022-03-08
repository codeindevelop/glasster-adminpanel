import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer, initialState);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);

export default store;
