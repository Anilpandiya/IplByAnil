import { Injectable } from '@angular/core';
import { Pointstable } from './pointstable';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PointsService {

  private _pointsUrl = './api/points-table.json'; 
  constructor(private _http : HttpClient ){
  };
  getPoints() : Observable<Pointstable[]> {

      return this._http.get<Pointstable[]>(this._pointsUrl)
         // .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

}