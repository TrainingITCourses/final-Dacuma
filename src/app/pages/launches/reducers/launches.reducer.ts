import { Action } from '@ngrx/store';
import { LaunchesActionTypes, LaunchesActions } from './launches.actions';


export interface LaunchesState {
  launches: any[];
  launchesLoaded: boolean;
  message: string;
}

export const initialState: LaunchesState = {
  launches: [],
  launchesLoaded: false,
  message: '',
};

export function reducer(state = initialState, action: LaunchesActions): LaunchesState {
  switch (action.type) {
    case LaunchesActionTypes.LoadLaunches:
      state.launchesLoaded = false;
      return { ...state };
    case LaunchesActionTypes.LaunchesLoaded:
      state.launches = action.payload;
      state.launchesLoaded = true;
      return { ...state };
    case LaunchesActionTypes.LaunchesNotLoaded:
      state.launchesLoaded = false;
      return { ...state, 'message': action.payload };
    default:
      return state;
  }
}
