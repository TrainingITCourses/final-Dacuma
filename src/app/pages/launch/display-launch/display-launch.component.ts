import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { LaunchState } from '../reducers/launch.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'dcm-display-launch',
  templateUrl: './display-launch.component.html',
  styleUrls: ['./display-launch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayLaunchComponent implements OnInit {

  @Input() launch: any;

  constructor(private store: Store<LaunchState>) {}

  ngOnInit() {
  }

}
