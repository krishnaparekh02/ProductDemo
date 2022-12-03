// // --------------- LIBRARIES ---------------
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

// // --------------- ASSETS ---------------
import rootReducer from './Reducers';
import rootSaga from './Sagas';

// Roor reducer with persist config
const reducers = persistReducer(
    {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['Common'],
    },
    rootReducer,
);

// Middlewares setup
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];
/**
 * Only use redux logger if app is in debug more and not in relase mode
 * It will imprive app performance
 */
if (__DEV__ && typeof atob !== 'undefined') {
    middlewares.push(sagaMiddleware, logger); // With logger
} else {
    middlewares.push(sagaMiddleware); // without logger
}

// Create store ----->>>>>
export const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(...middlewares);
    },
  });

// PersistStore contains all the data from store ----->>>>>
export const Persistor = persistStore(Store);
sagaMiddleware.run(rootSaga); // Run Saga
