import {createStore, combineReducers} from 'redux';
import todoReducer from '../Reducers';

const reducer = combineReducers({
  todoReducer: todoReducer,
});

const configureStore = () => {
  return createStore(reducer);
};

export default configureStore;

export type RootState = ReturnType<typeof reducer>;
