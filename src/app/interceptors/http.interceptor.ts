import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      // Clone the request and add the Authorization header
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // Pass the modified request to the next handler
      return next.handle(modifiedRequest);
    }

    // If no token is available, proceed with the original request
    return next.handle(request);
  }
}
