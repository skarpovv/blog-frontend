import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../services/auth";

@Injectable({ providedIn: 'root' })
export class CanLoginGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): boolean {
    if (this._authService.isAuthenticated()) {
      this._router.navigate(['']);

      return false;
    }

    return true;
  }
}
