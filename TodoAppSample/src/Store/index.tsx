import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import todoReducer from '../Reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todoItems'],
};

const reducer = combineReducers({
  todoReducer: persistReducer<ReturnType<typeof todoReducer>, any>(
    persistConfig,
    todoReducer,
  ),
});

export const store = createStore(reducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducer>;
