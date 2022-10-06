import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  MacchineDaCantiere: string[];
  constructor() {
    this.MacchineDaCantiere = ['Escavatori', 'Terne', 'Pale', 'Minipale', 'Dumpers', 'Bulldozer', 'Motolivellatrici', 'Rulli compattatori', 'Luigi', 'Cricchetto']
   }

  ngOnInit(): void {
  }

}
