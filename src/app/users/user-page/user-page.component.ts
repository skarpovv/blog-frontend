import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {catchError, map, switchMap, take, tap, throwError} from "rxjs";
import {UsersService} from "../../services/users/users.service";
import {User} from "../../services/auth";
import {Post, PostService} from "../../services/posts/posts.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPageComponent implements OnInit {
  user: User;
  posts: Post[]

  constructor(private _route: ActivatedRoute, private _usersService: UsersService, private _postsService: PostService) {}

  ngOnInit() {
    this._route.paramMap.pipe(
      take(1),
      map((params: ParamMap) => params.get('id')),
      switchMap((id) => this._usersService.getUserById(id).pipe(
        tap((user: User) => {this.user = user }),
        catchError((err) => throwError(() => err))
      )),
      switchMap((user) => this._postsService.getUserBlogs(user._id).pipe(
        tap((posts: Post[]) => {this.posts = posts}),
        catchError((err) => throwError(() => err))
      ))
    ).subscribe()
  }
}
