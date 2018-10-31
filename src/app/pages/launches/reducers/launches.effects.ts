import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchesActionTypes, LoadLaunches, LaunchesLoaded, LaunchesNotLoaded } from './launches.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { of } from 'rxjs';


@Injectable()
export class LaunchesEffects {

  @Effect()
  public loadLaunches$ = this.actions$.ofType(LaunchesActionTypes.LoadLaunches).pipe(
    mergeMap((action: LoadLaunches) => this.service.getLaunches().pipe(
      map(launches => new LaunchesLoaded(launches)),
      catchError(error => of(new LaunchesNotLoaded(error.message)))
    ))
  );

  constructor(private actions$: Actions, private service: AppService) {}
}
