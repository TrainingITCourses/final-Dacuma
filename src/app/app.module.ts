import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayStatusesComponent } from './pages/statuses/display-statuses/display-statuses.component';
import { StatusesComponent } from './pages/statuses/statuses.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StatusesEffects } from './reducers/statuses/statuses.effects';
import { LaunchesEffects } from './pages/launches/reducers/launches.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatusesComponent,
    DisplayStatusesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([StatusesEffects, LaunchesEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
