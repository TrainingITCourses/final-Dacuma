import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusesComponent } from './pages/statuses/statuses.component';

const routes: Routes = [
  { path: '', component: StatusesComponent },
  { path: ':id', loadChildren: './pages/launches/launches.module#LaunchesModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
