import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(private http: HttpClient) { }

  searchLeague(query: string) {
    const url = `https://v3.football.api-sports.io/leagues?name=${query}`;
    const headers = new HttpHeaders({
      "x-rapidapi-key": "57ea81c74e11d571e67dbe4d3f2ebd51",
      "x-rapidapi-host": "v3.football.api-sports.io"
    });

    let idLeague = this.http.get(url, { headers: headers });
    return idLeague;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}
