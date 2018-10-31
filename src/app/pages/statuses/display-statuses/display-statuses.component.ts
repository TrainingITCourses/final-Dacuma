import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dcm-display-statuses',
  templateUrl: './display-statuses.component.html',
  styleUrls: ['./display-statuses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayStatusesComponent {

  @Input() statuses;
  @Output() buttonPressed = new EventEmitter();

  constructor() { }

  clickOnButton(id) {
    this.buttonPressed.next(id);
  }

}
