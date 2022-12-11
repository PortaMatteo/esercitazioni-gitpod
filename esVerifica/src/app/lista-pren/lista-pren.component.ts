import { Component, Input } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent {
  constructor(){}
  @Input() listaPreno : Booking[] = undefined!;
  
  @Input() room : Room = undefined!;

  mostraDett(room : Room){
    this.room.id = room.id;
    this.room.name = room.name;
    this.room.num_D_bed = room.num_D_bed;
    this.room.num_S_bed = room.num_S_bed;
  }
  
}
