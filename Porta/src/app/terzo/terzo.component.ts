import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terzo',
  templateUrl: './terzo.component.html',
  styleUrls: ['./terzo.component.css']
})
export class TerzoComponent implements OnInit {
  parola = "terzo";
  constructor() { }

  ngOnInit(): void {
  }

}
