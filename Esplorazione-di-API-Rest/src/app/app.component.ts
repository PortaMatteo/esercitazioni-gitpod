import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballService } from './football.service';
import { League } from './models/league.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esplorazione-di-API-Rest';
  LeagueObs!: Observable<League> ;
  results !: League
  query: any
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public football: FootballService, private router: Router) {

  }
  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.LeagueObs = this.football.searchLeague(this.query);
    this.LeagueObs.subscribe((data) => {
      this.router.navigate(["teams", data.response[0].league.id])
    });
    
  }
  
  

}
