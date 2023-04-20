import { Component } from '@angular/core';
import * as L from 'leaflet'; // Importiamo leaflet
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private map: any;
  geoJsonObject !: any;
  
  private initMap(): void {
    // Creazione della mappa 
    this.map = L.map('map', { 
      center: [45.464211, 9.191383], // Latitudine e longitudine del centro della mappa
      zoom: 12,
    });
    
    // Aggiunta del tile alla mappa 
    const tiles = L.tileLayer( 
       // Aggiunge il Layer Tile che in questo caso prendiamo da openstreetmap 
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );  

    tiles.addTo(this.map);  // Aggiunge il tile alla mappa 
    this.geoJsonObject = GEOJSON; 

    L.geoJSON(this.geoJsonObject).addTo(this.map);
  }

  constructor() {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}





