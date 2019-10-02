import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToDoState } from 'src/app/rx/todo.reducers';
import { AddAction } from 'src/app/rx/todo.action';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;
  constructor(private store: Store<ToDoState>) { }

  ngOnInit() {
    this.txtInput = new FormControl('', Validators.required);
  }

  addTodo() {
    const action = new AddAction(this.txtInput.value);
    this.store.dispatch(action);
    this.txtInput.setValue('');
  }

}
