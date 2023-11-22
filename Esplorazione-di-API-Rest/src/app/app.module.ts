import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamDetailComponent } from './team-detail/team-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsListComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    TeamDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
