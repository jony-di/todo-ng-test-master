import ToDoModel from '../todo/todoModel';
import { ActionReducerMap } from '@ngrx/store';
import { ToDoReducer } from './todo.reducer';
import { filtroReducer } from '../filter/filter.reducer';
import { filtrosValidos } from '../filter/filter.actions';

export interface ToDoState {
  todos: ToDoModel[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<ToDoState> = {
  todos: ToDoReducer,
  filtro: filtroReducer
}
