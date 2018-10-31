import { Component } from '@angular/core';
import { LoadLaunches } from './pages/launches/reducers/launches.actions';
import { LoadStatuses } from './reducers/statuses/statuses.actions';
import { Store } from '@ngrx/store';
import { State } from './reducers';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';

@Component({
  selector: 'dcm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(swUpdate: SwUpdate, private store: Store<State>) {
    this.store.dispatch(new LoadStatuses());
    this.store.dispatch(new LoadLaunches());

    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'current: ' +
            event.current.hash +
            '. New: ' +
            event.available.hash +
            ' ?';
          if (confirm(msg)) { window.location.reload(); }
        }
      );
    }
  }

}
