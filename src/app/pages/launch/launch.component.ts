import { SetTitle } from './../../reducers/global/global.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LaunchState } from './reducers/launch.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadLaunch } from './reducers/launch.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'dcm-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {

  launchId = '';
  launch: any;

  constructor(private route: ActivatedRoute,
    private store: Store<State>,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(r => {
      this.launchId = r['id'];
      console.log(this.launchId);
      this.store.dispatch(new LoadLaunch(this.launchId));
      this.store.select<LaunchState>('launch').subscribe(res => {
        this.launch = res.launch.launch;
        this.store.dispatch(new SetTitle(this.launch.name));
      });
    });
  }
}
