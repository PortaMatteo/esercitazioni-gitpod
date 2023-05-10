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

    /*const marker0 = new L.Marker([this.geoJsonObject.features[0].geometry.coordinates[0][0][1], this.geoJsonObject.features[0].geometry.coordinates[0][0][0]]).bindPopup(String(0)).addTo(this.map);
    marker0.addTo(this.map);
 
    const marker1 = new L.Marker([this.geoJsonObject.features[1].geometry.coordinates[0][0][1], this.geoJsonObject.features[1].geometry.coordinates[0][0][0]]).bindPopup(String(1)).addTo(this.map);
    marker1.addTo(this.map);
    */
   
    for (var i = 0; i < this.geoJsonObject.features.length; i++) {
      L.marker([this.geoJsonObject.features[i].geometry.coordinates[0][0][1], this.geoJsonObject.features[i].geometry.coordinates[0][0][0]]).bindPopup(String(i)).addTo(this.map);
    }
 
    
  };

  styleFunc = (feature:any) =>{
    console.log(feature)
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
