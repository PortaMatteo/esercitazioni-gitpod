import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 45.506738, 9.190766 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    this.addHomeMarker();
  }

  addHomeMarker() {
    const homeMarker = L.marker({ lat: 45.506738, lng: 9.190766});
    homeMarker.bindPopup('This is our Home marker', {
      closeButton: true
    });
    homeMarker.addTo(this.map);
    L.circle({lat: 45.506738, lng: 9.190766}, {
      color: 'steelblue',
      radius: 500,
      fillColor: 'red',
      opacity: 0.5
    }).addTo(this.map);
    L.polygon([
      [45.506738, 9.190766],
      [45.50902699911582, 9.186635384772817],
      [45.50506112153221, 9.186203107251519]
  ]).addTo(this.map)}
  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
   }

}
