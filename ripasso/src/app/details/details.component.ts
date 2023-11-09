import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  routeObs!: Observable<ParamMap>;

  details: any; 
  detailObs!: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }

    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) => {
    let pockemonId = params.get('name'); //Ottengo l'id dalla ParamMap
    console.log(pockemonId); //Stampo su console
    if (pockemonId != null) {
      this.detailObs = this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pockemonId}`)
      this.detailObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.details = data;
    console.log(this.details)
  }

}
