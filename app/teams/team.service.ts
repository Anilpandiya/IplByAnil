import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ITeam }  from './team';


@Injectable()
export class TeamService {

  private _teamUrl = './api/teams.json'; 
  constructor(private _http : HttpClient ) { }

  getTeams() : Observable<ITeam[]> {
    
      return this._http.get<ITeam[]>(this._teamUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }

}