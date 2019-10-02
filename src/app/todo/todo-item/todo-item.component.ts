import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import ToDoModel from '../todoModel';
import { FormControl, Validators } from '@angular/forms';
import { ToDoState } from 'src/app/rx/todo.reducers';
import { Store } from '@ngrx/store';
import { ToggleAction, DeleteAction } from 'src/app/rx/todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() Id: number;
  @Input() Todo: ToDoModel;
  @ViewChild('txtEditQuery') txtEditQuery: ElementRef;
  editando: boolean;
  chkCompleted: FormControl;
  txtEdit: FormControl;

  constructor(private store: Store<ToDoState>) {}

  ngOnInit() {
    this.chkCompleted = new FormControl(this.Todo.IsCompleted);
    this.txtEdit = new FormControl(this.Todo.Title, Validators.required);
    this.chkCompleted.valueChanges.subscribe(
      () => {
        const accion = new ToggleAction(this.Id);
        this.store.dispatch(accion);
      });
  }
  editar() {
    this.editando = true;
    setTimeout(() => { this.txtEditQuery.nativeElement.select(); }, 10);
  }

  cancel() {
    this.editando = false;
  }
  editado() {
    const accion = new ToggleAction(this.Id, this.txtEdit.value);
    this.store.dispatch(accion);
  }
  borrar() {
    const accion = new DeleteAction(this.Id);
    this.store.dispatch(accion);
  }
}
