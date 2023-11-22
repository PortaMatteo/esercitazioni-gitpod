import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { League } from './models/league.model';
import { Teams } from './models/teams.model';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  idLeague : any 

  constructor(private http: HttpClient) { }

  searchLeague(query: string) {
    const urlL = `https://v3.football.api-sports.io/leagues?name=${query}`;
    const headers = new HttpHeaders({
      "x-rapidapi-key": "f1e1e19b0196fca13cb93c565f5d4194",
      "x-rapidapi-host": "v3.football.api-sports.io"
    });

    let League = this.http.get<League>(urlL, { headers: headers });
    
    
    return League;
    //Ritorno un observable ai componenti che richiedono il servizio
  }

  searchTeams(leagueId: string){
    const utlT = `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2023`;
    const headers = new HttpHeaders({
      "x-rapidapi-key": "f1e1e19b0196fca13cb93c565f5d4194",
      "x-rapidapi-host": "v3.football.api-sports.io"
    });

    let teams = this.http.get<Teams>(utlT, { headers: headers });
    
    
    return teams;

  }




}
