import { Action } from '@ngrx/store';

export const ADD = '[ToDo] ADD TODO';
export const TOGGLE = '[ToDo] TOGGLE TODO';
export const DELETE = '[ToDo] DELETE TODO';
export const CLEAR = '[ToDo] CLEAR TODOS';

export class AddAction implements Action {
 readonly type = ADD;
 constructor(public text: string) {}
}

export class ToggleAction implements Action {
  readonly type = TOGGLE;
  constructor(public id: number, public Title?: string) {}
 }

 export class DeleteAction implements Action {
  readonly type = DELETE;
  constructor(public id: number) {}
 }

export class ClearAction implements Action {
  readonly type = CLEAR;
 }

 export type All = AddAction | ToggleAction | DeleteAction | ClearAction;
