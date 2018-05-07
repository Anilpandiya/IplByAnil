import { Component, OnInit } from '@angular/core';
import { Isquad } from './squad';
import { SquadService } from './squad.service';
import { ITeam } from '../teams/team';


@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  errorMessage : string;

  squad : Isquad[] = [];
  constructor(private _squadService : SquadService) { }

  ngOnInit() {
    this._squadService.getSquad()
    .subscribe(squad => this.squad = squad,
      error => this.errorMessage =<any>error);  }

}