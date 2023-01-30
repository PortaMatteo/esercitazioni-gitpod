import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
    
  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
      'Bearer BQASlM7zrtVvLXN3ev9Mo0xSDHiuCnOfjlQX38ZqWnNv6wqHcs6u4u4NSI7NHBud2aV9tX_BCdET1j2fhDGe11VMEaFOZHnbhsdfFnRBcxGCo0jHhVocMh6lPmhwCwK2R4HGN0n8V35bJmq2S6E7IXaveZY8HrgkgNAKl-sMvwq3QB560Xxqb-Ookl-LpF07'
    });
    
    let obsTracks = this.http.get(url, {headers})
    return obsTracks
    }

    getTrack(id: string) {
      const url = `https://api.spotify.com/v1/tracks/${id}`;
      const headers = new HttpHeaders({
        Authorization:
          'Bearer BQASlM7zrtVvLXN3ev9Mo0xSDHiuCnOfjlQX38ZqWnNv6wqHcs6u4u4NSI7NHBud2aV9tX_BCdET1j2fhDGe11VMEaFOZHnbhsdfFnRBcxGCo0jHhVocMh6lPmhwCwK2R4HGN0n8V35bJmq2S6E7IXaveZY8HrgkgNAKl-sMvwq3QB560Xxqb-Ookl-LpF07'
      });
      
      return this.http.get(url, { headers });
    }

   }

