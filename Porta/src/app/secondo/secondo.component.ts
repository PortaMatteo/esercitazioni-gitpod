import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.css']
})
export class SecondoComponent implements OnInit {
  parola = "secondo";
  constructor() { }

  ngOnInit(): void {
  }

}
