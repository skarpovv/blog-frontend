import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private _router: Router) {
  }
  logout() {
    localStorage.setItem('isAuth', 'false')

    this._router.navigate(['/login']);
  }

  home() {
    this._router.navigate(['']);
  }

  profile() {
    this._router.navigate(['/profile']);
  }
}
