import { Action } from '@ngrx/store';

export enum StatusesActionTypes {
  LoadStatuses = '[Status] Load Statuses',
  StatusesLoaded = '[Status] Statuses Loaded',
  StatusesNotLoaded = '[Status] Statuses Not Loaded',
}

export class LoadStatuses implements Action {
  readonly type = StatusesActionTypes.LoadStatuses;
}

export class StatusesLoaded implements Action {
  readonly type = StatusesActionTypes.StatusesLoaded;
  constructor(public readonly payload?: any) { }
}

export class StatusesNotLoaded implements Action {
  readonly type = StatusesActionTypes.StatusesNotLoaded;
  constructor(public readonly payload?: any) { }
}

export type StatusesActions = LoadStatuses | StatusesLoaded | StatusesNotLoaded;
