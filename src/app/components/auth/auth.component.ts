import { Component } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(private _route: Router) {
  }

  login() {
    localStorage.setItem('isAuth', "true");

    this._route.navigate([''])
  }
}
