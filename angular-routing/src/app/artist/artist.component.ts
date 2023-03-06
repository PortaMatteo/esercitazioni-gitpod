import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  routeObs!: Observable<ParamMap>;

  artist: any; //Qui salverò la traccia selezionata
  spotifyServiceObs!: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private service: SpotifyService) { }

  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    let artistId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(artistId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if (artistId != null) {
      this.spotifyServiceObs = this.service.getArtist(artistId);
      this.spotifyServiceObs.subscribe((data) => this.artist = data)
    }
  }
}