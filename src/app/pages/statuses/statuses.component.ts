import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadStatuses } from 'src/app/reducers/statuses/statuses.actions';
import { SetTitle } from 'src/app/reducers/global/global.actions';
import { State } from '../../reducers/index';

@Component({
  selector: 'dcm-status',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {

  cargado = false;
  statuses: any[];

  constructor(private store: Store<State>,
    private router: Router) {

    this.store.select('statuses').subscribe((res: any) => {
      this.statuses = res.statuses;
    });
  }

  ngOnInit() {
    this.store.select('launches').subscribe((res: any) => {
      this.store.dispatch(new SetTitle(`Lanzamientos: ${res.launches.length}`));
    });
  }

  openStatus(id) {
    this.router.navigate([id]);
  }

}
