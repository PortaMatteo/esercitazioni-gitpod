import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeList } from './type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ripasso';
  obs: Observable <TypeList> ;
  data!: TypeList ;
  constructor(private http : HttpClient){
    this.obs = this.http.get<TypeList>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.dosomething)
  }
  dosomething = (data : TypeList) => {
    this.data = data;
    console.log(this.data)
  }
}
