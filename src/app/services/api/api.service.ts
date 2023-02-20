import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly _baseApi = 'https://blog-api-y59o.onrender.com'

  get register(): string {
    return `${this._authRoute}/register`
  }
  get login(): string {
    return `${this._authRoute}/login`
  }

  private get _authRoute(): string {
    return `${this._baseApi}/auth`
  }
}
