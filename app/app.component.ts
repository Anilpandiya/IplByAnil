import { Component } from '@angular/core';
import { TeamService } from './teams/team.service';
import { PointsService } from './points-table/points.service';
import { SquadService } from './squad/squad.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers : [TeamService, PointsService, SquadService]
})
export class AppComponent  {
  pageTitle = 'IPL 2018';
}
