import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import { EffectsModule } from '@ngrx/effects';
import { LaunchesEffects } from './reducers/launches.effects';
import { reducer } from './reducers/launches.reducer';
import { StoreModule } from '@ngrx/store';
import { DisplayLaunchesComponent } from './display-launches/display-launches.component';

const routes: Routes = [
  { path: '', component: LaunchesComponent },
  { path: ':id', loadChildren: '../launch/launch.module#LaunchModule' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LaunchesComponent, DisplayLaunchesComponent]
})
export class LaunchesModule { }
