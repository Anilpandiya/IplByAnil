import { Component, OnInit } from '@angular/core';
import { ITeam }  from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  
  teams : ITeam[] = [];
  errorMessage : string;
  constructor(private _teamService : TeamService ) { }

  ngOnInit() {
  this._teamService.getTeams()
        .subscribe(teams => this.teams = teams,
                   error => this.errorMessage =<any>error);
  }

}
