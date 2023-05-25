import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from "../services/auth";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.isAuthenticated()) {
      console.log('guard: ', state.url, this._authService.isAuthenticated());
      this._router.navigate(['/auth']);
      return false;
    }

    return true;
  }

}
