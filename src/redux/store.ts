import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import allReducers from './reducer';
import rootSaga from './saga';

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: ['loading'],
};

// Create a persisted reducer with MMKV as the storage engine
const persistedReducer = persistReducer(persistConfig, allReducers);

// Setting up Redux DevTools if in development mode
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Initialize saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store with persisted reducer and saga middleware
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

// Run the root saga
sagaMiddleware.run(rootSaga);

// Create a persistor for Redux Persist
const persistor = persistStore(store);

export {store, persistor};
