import { Action } from '@ngrx/store';
import { GlobalActionTypes, GlobalActions } from './global.actions';


export interface GlobalState {
  title: string;
}

export const initialState: GlobalState = {
  title: ''
};

export function reducer(state = initialState, action: GlobalActions): GlobalState {
  switch (action.type) {
    case GlobalActionTypes.SetTitle:
      state.title = action.payload;
      return { ...state };
    default:
      return state;
  }
}
