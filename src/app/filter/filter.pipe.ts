import { Pipe, PipeTransform } from '@angular/core';
import ToDoModel from '../todo/todoModel';
import { filtrosValidos } from './filter.actions';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: ToDoModel[], filtro: filtrosValidos): ToDoModel[] {
    switch (filtro) {
      case 'Todo':
        return todos;
      case 'Pending':
      return todos.filter(todo => !todo.IsCompleted);
      case 'Completed':
      return todos.filter(todo => todo.IsCompleted);
      default:
        return todos;
    }
  }
}
