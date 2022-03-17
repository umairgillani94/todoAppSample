export interface TodoItem {
  id: string;
  data: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TodoItemAction {
  type: string;
  payload?: TodoItem;
}
