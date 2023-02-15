import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api/api.service";
import {Observable} from "rxjs";

export interface User {
  fullName: string;
  email: string;
  username: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private _http: HttpClient, private _api: ApiService) {}

  register(user: User): Observable<User | {message: string}> {
    return this._http.post<User | {message: string}>(this._api.register, user)
  }

}
