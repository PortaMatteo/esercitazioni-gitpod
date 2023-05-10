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
  fillColor: any;
  title: any;

  
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

    L.geoJSON(this.geoJsonObject).setStyle(this.styleFunc).addTo(this.map);
    console.log(this.geoJsonObject);

    for (var i = 0; i < this.geoJsonObject.features.length; i++) {
      L.marker([this.geoJsonObject.features[i].geometry.coordinates[0][0][1], this.geoJsonObject.features[i].geometry.coordinates[0][0][0]]).bindPopup(String(i)).addTo(this.map);
    }
  }
  styleFunc = (feature: any) =>{
    console.log(feature.properties.id)
    let newColor = "#FF0000"; //RED
    if(feature.properties.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
        clickable: false,
        fillColor: newColor, // Colora solo l'interno 
        strokeWeight: 1,
        color: newColor // Colora tutto il poligono 
    });
  }

  constructor() {
  }
  
  ngAfterViewInit(): void {
    this.initMap();
  }

}





