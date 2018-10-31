import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LaunchesState } from './reducers/launches.reducer';
import { LoadLaunches } from './reducers/launches.actions';
import { GlobalState } from 'src/app/reducers/global/global.reducer';
import { SetTitle } from 'src/app/reducers/global/global.actions';
import { StatusesState } from '../../reducers/statuses/statuses.reducer';

@Component({
  selector: 'dcm-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {

  statusId = '';
  launches: any = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private launchesStore: Store<LaunchesState>,
    private globalStore: Store<GlobalState>,
    private statusesStore: Store<StatusesState>) {
  }

  ngOnInit() {
    this.route.params.subscribe(r => {
      const that = this;
      this.statusId = r['id'];
      this.launchesStore.select<LaunchesState>('launches').subscribe(res => {
        this.launches = res.launches.filter(launch => Number(launch.status) === Number(that.statusId));
      });
      this.statusesStore.select('statuses').subscribe((res: any) => {
        const status = res.statuses.filter(x => Number(x.id) === Number(that.statusId))[0];
        that.globalStore.dispatch(new SetTitle(status.name));
      });
    });
  }

  launchSelected(id) {
    this.router.navigate([this.statusId, id]);
  }

  sortLaunches(desc) {
    this.launches = this.launches.sort((n1, n2) => {
      if (n1.isostart < n2.isostart) {
        return desc ? 1 : -1;
      }
      if (n1.isostart > n2.isostart) {
        return desc ? -1 : 1;
      }
      return 0;
    });
  }
}
