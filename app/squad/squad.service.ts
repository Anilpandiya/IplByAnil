import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Isquad } from './squad';

@Injectable()
export class SquadService {

  private _squadUrl = './api/squad.json';
  constructor(private _http : HttpClient) { }

  getSquad() : Observable<Isquad[]>{
    
    return this._http.get<Isquad[]>(this._squadUrl)
    .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
  }

  getSquaddetail(team: string): Observable<Isquad> {
    return this.getSquad()
        .map((squad: Isquad[]) => squad.find(s => s.Team === team));
}
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}
}