import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient

  ) { }

  login({ email, password }: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/login`, { email, password }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  register({ email, password, name }: { email: string, password: string, name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/register`, { email, password, name }).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de red
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
