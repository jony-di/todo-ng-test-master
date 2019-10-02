import { Component, OnInit } from '@angular/core';
import ToDoModel from '../todoModel';
import { Store } from '@ngrx/store';
import { ToDoState } from 'src/app/rx/todo.reducers';
import { filtrosValidos } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todolist: ToDoModel[] = [];
  filtroSelect: filtrosValidos;

  constructor(private store: Store<ToDoState>) {}
  ngOnInit() {
    this.store.subscribe(state => {
      this.todolist = state.todos;
      this.filtroSelect = state.filtro;
    });
  }

}
