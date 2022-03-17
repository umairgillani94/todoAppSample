import {
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  DATA_UPDATED,
} from '../Actions/Constants';
import {TodoItem, TodoItemAction} from '../Interfaces/TodoItem';

const initialState: {todoItems: TodoItem[]; refreshFlag: boolean} = {
  todoItems: [],
  refreshFlag: false,
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
      let data = state.todoItems;
      data = data.filter(item => {
        return item.id !== action.payload?.id;
      });
      return {
        ...state,
        todoItems: [...data],
      };
    }
    case UPDATE_TODO_ITEM: {
      const data = state.todoItems;
      const index = data.findIndex(item => {
        return item.id === action.payload?.id;
      });
      if (index > -1) {
        state.todoItems[index] = action.payload!;
      }
      return {
        ...state,
        todoItems: [...state.todoItems],
      };
    }
    case DATA_UPDATED: {
      return {
        ...state,
        refreshFlag: !state.refreshFlag,
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
