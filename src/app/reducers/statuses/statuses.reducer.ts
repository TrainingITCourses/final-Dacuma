import { Action } from '@ngrx/store';
import { StatusesActionTypes, StatusesActions } from './statuses.actions';


export interface StatusesState {
  statuses: any[];
  statusesLoaded: boolean;
  message: string;
}

export const initialState: StatusesState = {
  statuses: [],
  statusesLoaded: false,
  message: ''
};

export function reducer(state = initialState, action: StatusesActions): StatusesState {
  switch (action.type) {
    case StatusesActionTypes.LoadStatuses:
      return state;
    case StatusesActionTypes.StatusesLoaded:
      state.statuses = action.payload;
      state.statusesLoaded = true;
      return { ...state };
    case StatusesActionTypes.StatusesNotLoaded:
      return { ...state, 'message': action.payload };
    default:
      return state;
  }
}
