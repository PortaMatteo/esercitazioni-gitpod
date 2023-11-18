import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FootballService } from './football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Esplorazione-di-API-Rest';
  LeagueObs!: Observable<Object>;
  results : any
  query: any
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public football: FootballService) {

  }
  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.LeagueObs = this.football.searchLeague(this.query);
    this.LeagueObs.subscribe((data) => this.results = data); 
  }


}
