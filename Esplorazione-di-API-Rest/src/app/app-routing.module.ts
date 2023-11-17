import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

const routes: Routes = [
  {path: "", component:AppComponent},
  {path:"/teams", component:TeamsListComponent},
  {path:"/players", component:PlayerListComponent},
  {path:"/player/detail", component:PlayerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
