import { Action } from '@ngrx/store';
import { LaunchActionTypes, LaunchActions } from './launch.actions';


export interface LaunchState {
  launch: any;
  launchLoaded: boolean;
  message: string;
}

export const initialState: LaunchState = {
  launch: {},
  launchLoaded: false,
  message: ''
};

export function reducer(state = initialState, action: LaunchActions): LaunchState {
  switch (action.type) {
    case LaunchActionTypes.LoadLaunch:
    state.launchLoaded = false;
    return { ...state };
  case LaunchActionTypes.LaunchLoaded:
    state.launch = action.payload;
    state.launchLoaded = true;
    return { ...state };
  case LaunchActionTypes.LaunchNotLoaded:
    state.launchLoaded = false;
    return { ...state, 'message': action.payload };
    default:
      return state;
  }
}
