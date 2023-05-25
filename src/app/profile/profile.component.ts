import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users/users.service";
import {User} from "../services/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  me: User;

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this._usersService.me().subscribe((me: User) => {
      this.me = me;
    })
  }
}
