import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { of } from 'rxjs';
import { LaunchActionTypes, LoadLaunch, LaunchLoaded, LaunchNotLoaded } from './launch.actions';

@Injectable()
export class LaunchEffects {

  @Effect()
  public loadLaunch$ = this.actions$.ofType(LaunchActionTypes.LoadLaunch).pipe(
    mergeMap((action: LoadLaunch) => this.service.getLaunchById(action.payload).pipe(
      map(launch => new LaunchLoaded(launch)),
      catchError(error => of(new LaunchNotLoaded(error.message)))
    ))
  );

  constructor(private actions$: Actions, private service: AppService) {}
}
