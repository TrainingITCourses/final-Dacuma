import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/reducers/global/global.reducer';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'dcm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  global$: Observable<any>;
  isRoot: boolean;
  public version = '1.0';

  constructor(private _location: Location,
    private global: Store<GlobalState>,
    private router: Router,
    private swUpdate: SwUpdate) {
    this.global$ = this.global.select<GlobalState>('global');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      event.url === '/' ? this.isRoot = true : this.isRoot = false;
    });
  }

  back() {
    this._location.back();
  }

  checkUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
    }
  }
}
