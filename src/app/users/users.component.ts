import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {User} from "../services/auth";
import {UsersService} from "../services/users/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users: User[];
  searchQuery: string;

  constructor(private userService: UsersService, private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('UsersComponent')
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this._cdr.detectChanges();
    });
  }
}
