
import * as Acciones from './todo.action';
import ToDoModel from '../todo/todoModel';

export function ToDoReducer(state: ToDoModel[] = [], action: Acciones.All) {
  switch (action.type) {
    case Acciones.ADD:
        const todo = new ToDoModel(action.text);
      return [ ...state, todo];
    case Acciones.TOGGLE:
      return state.map((value, index) => {
        if (index == action.id) {
          return {
            ...value,
            IsCompleted: action.Title ? value.IsCompleted : !value.IsCompleted,
            Title: action.Title ? action.Title : value.Title
          };
        } else {
          return value;
        }
      });
    case Acciones.DELETE:
      return state.filter((value, index) => index !== action.id);
    case Acciones.CLEAR:
          return state.filter( todos => !todos.IsCompleted);
    default:
      return state;
  }
}
