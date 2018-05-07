import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Isquad } from './squad';
import { SquadService } from './squad.service';

@Component({
  selector: 'app-squaddetails',
  templateUrl: './squaddetails.component.html',
  styleUrls: ['./squaddetails.component.css']
})
export class SquaddetailsComponent implements OnInit {

  squad :Isquad;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _squadService: SquadService) {
  }

  ngOnInit() {
    console.log("I am  here");
    const param = this._route.snapshot.paramMap.get('team');
    if (param) {
      const team = param;
      this.getSquaddetails(team);
    }
  }

  getSquaddetails(team: string) {
    console.log("I am  here");
    this._squadService.getSquaddetail(team).subscribe(
      squad => this.squad = squad,
      error => this.errorMessage = <any>error);
  }

}
