import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {User} from "../auth";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _api: ApiService, private _http: HttpClient) { }

  getUsers(): Observable<any> {
    return this._http.get(this._api.users).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting users' })))
    )
  }

  getUserById(id: string): Observable<any> {
    return this._http.get(this._api.getUserById(id)).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting user by id' })))
    )
  }

  me(): Observable<User> {
    return this._http.get<User>(this._api.me).pipe(
      catchError((error: any) => throwError(() => ({ message: 'Error getting user by id' })))
    )
  }

}
