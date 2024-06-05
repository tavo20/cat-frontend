import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CatBreed } from '../models/CarBreed';



@Injectable({
  providedIn: 'root'
})
export class CatBreedService {

  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  getCatBreeds() {
    return this.http.get(`${this.apiUrl}api/breed`).pipe(
      map((res: any) => {
        return res.map((catBreed: CatBreed) => {
          return {
            id: catBreed.id,
            name: catBreed.name,
            description: catBreed.description,
            origin: catBreed.origin,
            image: catBreed.image,
            child_friendly: catBreed.child_friendly,
            temperament: catBreed.temperament,
            life_span: catBreed.life_span,
            weight: catBreed.weight,
          };
        });
      }),
      retry(3),
      catchError(this.handleError)
    );
  }

  public getImagesByBreedId(breedId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}api/breed/imagesbybreedid/${breedId}`).pipe(
      map((res: any) => {
        return res.map((image: any) => {
          return {
            
            id: image.id,
            url: image.url
          };
        });
      }),
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
