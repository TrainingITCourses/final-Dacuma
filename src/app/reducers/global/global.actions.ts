import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  SetTitle = '[Global] Set Title'
}

export class SetTitle implements Action {
  readonly type = GlobalActionTypes.SetTitle;
  constructor(public readonly payload?: any) { }
}

export type GlobalActions = SetTitle;
