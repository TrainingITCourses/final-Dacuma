import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LaunchesState } from '../reducers/launches.reducer';

@Component({
  selector: 'dcm-display-launches',
  templateUrl: './display-launches.component.html',
  styleUrls: ['./display-launches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayLaunchesComponent {

  @Input() launches: any = [];
  @Output() launchSelected = new EventEmitter();
  @Output() sortLaunches = new EventEmitter();
  sortDesc = true;

  constructor(private store: Store<LaunchesState>) {
  }

  launchClicked(id) {
    this.launchSelected.next(id);
  }

  sort() {
    this.sortLaunches.next(this.sortDesc);
    this.sortDesc = !this.sortDesc;
  }


}
