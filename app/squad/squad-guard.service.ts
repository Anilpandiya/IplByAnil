import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class SquadGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const team = route.url[1].path;
   
    return true;
  }
}
