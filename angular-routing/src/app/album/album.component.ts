import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  routeObs!: Observable<ParamMap>;

  album: any; //Qui salverò la traccia selezionata
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
    let albumId = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(albumId); //Stampo su console
    //spotifyServiceObs va dichiarato
    if (albumId != null) {
      this.spotifyServiceObs = this.service.getAlbum(albumId);
      this.spotifyServiceObs.subscribe((data) => this.album = data)
    }
  }
}
