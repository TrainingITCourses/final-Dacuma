import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunch = '[Launch] Load Launch',
  LaunchLoaded = '[Launch] Launch Loaded',
  LaunchNotLoaded = '[Launch] Launch Not Loaded',
}

export class LoadLaunch implements Action {
  readonly type = LaunchActionTypes.LoadLaunch;
  constructor(public readonly payload?: any) { }
}

export class LaunchLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchLoaded;
  constructor(public readonly payload?: any) { }
}

export class LaunchNotLoaded implements Action {
  readonly type = LaunchActionTypes.LaunchNotLoaded;
  constructor(public readonly payload?: any) { }
}
export type LaunchActions = LoadLaunch | LaunchLoaded | LaunchNotLoaded;
