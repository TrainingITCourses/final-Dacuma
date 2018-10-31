import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromStatuses from './statuses/statuses.reducer';
import * as fromLaunches from '../pages/launches/reducers/launches.reducer';
import * as fromGlobal from './global/global.reducer';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  global: fromGlobal.GlobalState;
  statuses: fromStatuses.StatusesState;
  launches: fromLaunches.LaunchesState;
  router: any;
}

export const reducers: ActionReducerMap<State> = {
  statuses: fromStatuses.reducer,
  launches: fromLaunches.reducer,
  global: fromGlobal.reducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
