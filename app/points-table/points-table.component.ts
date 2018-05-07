import { Component, OnInit } from '@angular/core';
import { Pointstable } from './pointstable';
import { PointsService } from './points.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {
  points : Pointstable[] = [];
  errorMessage : string;
  constructor(private _pointService : PointsService ) { }

  ngOnInit() {
  this._pointService.getPoints()
        .subscribe(points => this.points = points,
                   error => this.errorMessage =<any>error);
  }

}