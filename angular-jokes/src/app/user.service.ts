import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3002/users';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }


  /** GET user by username. Will 404 if id not found */
  getUser(pseudo: string): Observable<User[]> {
    const url = `${this.usersUrl}?pseudo=${pseudo}`;
    return this.http.get<User[]>(url).pipe(
      tap(_ => console.log(`fetched user pseudo=${pseudo}`)),
      catchError(this.handleError<User[]>(`getUser pseudo=${pseudo}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
