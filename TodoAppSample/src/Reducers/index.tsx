import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM,
} from '../Actions/Constants';
import {TodoItem, TodoItemAction} from '../Interfaces/TodoItem';

const initialState: {todoItems: TodoItem[]} = {
  todoItems: [],
};

const todoReducer = (state = initialState, action: TodoItemAction) => {
  switch (action.type) {
    case ADD_TODO_ITEM: {
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };
    }
    case DELETE_TODO_ITEM: {
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };
    }
    case UPDATE_TODO_ITEM: {
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
