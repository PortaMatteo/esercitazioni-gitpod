import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CucinaService } from '../cucina.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  title = 'first-routed-app';
  obsProduct!: Observable<Object>;
  results: any;
  // faccio iniettare lo spotify service e faccio una ricerca
  constructor(public cucina: CucinaService) {

  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProduct = this.cucina.searchProducts(this.query);
    this.obsProduct.subscribe((data) => { this.results = data; console.log(this.results) });
  }

}
