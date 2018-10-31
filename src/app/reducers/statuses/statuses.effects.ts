import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { StatusesActionTypes, LoadStatuses, StatusesLoaded, StatusesNotLoaded } from './statuses.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { of } from 'rxjs';


@Injectable()
export class StatusesEffects {

  @Effect()
  public loadStatuses$ = this.actions$.ofType(StatusesActionTypes.LoadStatuses).pipe(
    mergeMap((action: LoadStatuses) => this.service.getStatuses().pipe(
      map(statuses => new StatusesLoaded(statuses)),
      catchError(error => of(new StatusesNotLoaded(error.message)))
    ))
  );

  constructor(private actions$: Actions, private service: AppService) {}
}
