import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = '1846b2aa521497244d79980e83cd6e07bfe4d546';
    if (user) {
      request = request.clone({
        setHeaders: {
          Authorization: `Token ${user}`
        }
      });
    }
    return next.handle(request);
  }
}