import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../api/api.service";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

export interface User {
  _id: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginUser {
  login: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string;

  constructor(private _http: HttpClient, private _api: ApiService) {}

  register(user: User): Observable<User | { message: string }> {
    return this._http.post<User | { message: string }>(this._api.register, user)
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        catchError((error: any) => {
          // Handle registration error
          return of({ message: 'Registration Error' });
        })
      );
  }

  login(user: LoginUser): Observable<{ message: string }> {
    return this._http.post<{ message: string }>(this._api.login, user)
      .pipe(
        tap((response: any) => {
          if (response.token) {
            this.setToken(response.token);
          }
        }),
        catchError((error: any) => {
          // Handle login error
          return throwError(() => ({ message: 'Login Error' }));
        })
      );
  }

  logout(): void {
    localStorage.removeItem('blog-token');
  }

  isAuthenticated(): boolean {
    console.log('isAuthenticated: ', !!this.getToken());
    return !!this.getToken();
  }

  setToken(token: string): void {
    localStorage.setItem('blog-token', token);
  }

  getToken(): string {
    console.log('Token: ', localStorage.getItem('blog-token'));
    return localStorage.getItem('blog-token');
  }
}
