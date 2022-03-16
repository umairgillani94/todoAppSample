import {TodoItem} from '../Interfaces/TodoItem';
import {ADD_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM} from './Constants';

export const addTodoItem = (item: TodoItem) => {
  return {
    type: ADD_TODO_ITEM,
    payload: item,
  };
};

export const deleteTodoItem = (item: TodoItem) => {
  return {
    type: DELETE_TODO_ITEM,
    payload: item,
  };
};

export const updateTodoItem = (item: TodoItem) => {
  return {
    type: UPDATE_TODO_ITEM,
    payload: item,
  };
};
