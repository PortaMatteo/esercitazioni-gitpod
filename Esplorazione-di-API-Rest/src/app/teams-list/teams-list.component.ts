import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FootballService } from '../football.service';
import { Observable } from 'rxjs';
import { Teams } from '../models/teams.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent {
  routeObs!: Observable<ParamMap>;
  teamsObs!: Observable<Teams>;
  results !: Teams
  constructor(private route: ActivatedRoute,
    private service: FootballService,public football: FootballService){
      
    }
    ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
    }
  
    //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
    getRouterParam = (params: ParamMap) => {
      let leagueId = params.get('id'); //Ottengo l'id dalla ParamMap
      console.log(leagueId); //Stampo su console
      //spotifyServiceObs va dichiarato
      if (leagueId != null) {
        this.teamsObs = this.football.searchTeams(leagueId);
        this.teamsObs.subscribe((data) => this.results = data)
      }
    }

}
