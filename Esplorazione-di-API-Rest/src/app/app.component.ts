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
  idLeague: Observable<Object>;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public football: FootballService) {
    this.idLeague = football.searchLeague("Serie A");
    this.idLeague.subscribe((data) => console.log(data)); //visualizzo la ricerca sulla console
  }

}
