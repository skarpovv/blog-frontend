import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private _router: Router, private _authService: AuthService) {}

  logout() {
    this._authService.logout();
    this._router.navigate(['/auth']);
  }

}
