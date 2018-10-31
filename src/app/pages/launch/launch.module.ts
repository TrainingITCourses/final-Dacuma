import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LaunchComponent } from '../launch/launch.component';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './reducers/launch.effects';
import { reducer } from './reducers/launch.reducer';
import { StoreModule } from '@ngrx/store';
import { DisplayLaunchComponent } from './display-launch/display-launch.component';

const routes: Routes = [
  { path: '', component: LaunchComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('launch', { launch: reducer }),
    EffectsModule.forFeature([LaunchEffects]),
  ],
  declarations: [LaunchComponent, DisplayLaunchComponent]
})
export class LaunchModule { }
