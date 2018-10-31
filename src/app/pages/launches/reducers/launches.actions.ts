import { Action } from '@ngrx/store';

export enum LaunchesActionTypes {
  LoadLaunches = '[Launches] Load Launches',
  LaunchesLoaded = '[Launches] Launches Loaded',
  LaunchesNotLoaded = '[Launches] Launches Not Loaded',
}

export class LoadLaunches implements Action {
  readonly type = LaunchesActionTypes.LoadLaunches;
  constructor(public readonly payload?: any) { }
}

export class LaunchesLoaded implements Action {
  readonly type = LaunchesActionTypes.LaunchesLoaded;
  constructor(public readonly payload?: any) { }
}

export class LaunchesNotLoaded implements Action {
  readonly type = LaunchesActionTypes.LaunchesNotLoaded;
  constructor(public readonly payload?: any) { }
}
export type LaunchesActions = LoadLaunches | LaunchesLoaded | LaunchesNotLoaded;
