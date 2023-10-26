import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeList } from '../type.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
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

  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }
}
