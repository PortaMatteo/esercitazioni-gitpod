import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private map: any;
  title = 'Geojson-Leaflet';
  geoJsonObject : any;
  
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
    

    L.geoJSON(this.geoJsonObject).setStyle(this.styleFunc).addTo(this.map);// Aggiunge l'oggetto geojson all mappa 
    tiles.addTo(this.map);  // Aggiunge il tile alla mappa 
    
  };

  styleFunc = (feature:any) =>{
    console.log(feature.properties.id)
    let newColor = "#FF0000"; //RED
    if(feature.properties.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
      clickable: false,
      //fillColor: newColor,
      strokeWeight: 1,
      color : newColor // Colora L'intero poligono se solo, utilizzando fillcolor colora solo il bordo 
    });
  }

  constructor() {
    this.geoJsonObject = GEOJSON;  
    console.log(this.geoJsonObject);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
