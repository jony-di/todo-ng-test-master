import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDoState } from 'src/app/rx/todo.reducers';
import { filtrosValidos, SetFiltroAction } from 'src/app/filter/filter.actions';
import { ClearAction } from 'src/app/rx/todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  contador: number;
  filtrosValidos: filtrosValidos [] = ['Todo', 'Pending', 'Completed'];
  filtroSelect: filtrosValidos;

  constructor(private store: Store<ToDoState>) {
    this.store.subscribe(state => {
      this.contador = state.todos.filter(todos => !todos.IsCompleted ).length;
      this.filtroSelect = state.filtro;
    } );
  }
  ngOnInit() {
  }
  cambiaFiltro(filtro: filtrosValidos) {
    const action = new SetFiltroAction(filtro);
    this.store.dispatch(action);
  }
  ClearTodos() {
    const action = new ClearAction();
    this.store.dispatch(action);
  }
}
