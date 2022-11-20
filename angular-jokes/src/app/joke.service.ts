import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private jokesUrl = 'api/jokes';  // URL to web api
  private jokesCategoriesUrl = 'api/categories'; // URL to categories

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }


  /** GET jokes from the server */
  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.jokesUrl)
      .pipe(
        tap(_ => console.log('fetched jokes')),
        catchError(this.handleError<Joke[]>('getJokes', []))
      );
  }

  /** GET categorie jokes from the server */
  getJokesCategory(): Observable<string[]> {
    return this.http.get<string[]>(this.jokesCategoriesUrl)
      .pipe(
        tap(_ => console.log('fetched jokesCategory')),
        catchError(this.handleError<string[]>('getJokesCategory', []))
       );
  }

  /** GET joke by id. Will 404 if id not found */
  getJoke(id: number): Observable<Joke> {
    const url = `${this.jokesUrl}/${id}`;
    return this.http.get<Joke>(url).pipe(
      tap(_ => console.log(`fetched joke id=${id}`)),
      catchError(this.handleError<Joke>(`getJoke id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new joke to the server */
  addJoke(joke: Joke): Observable<Joke> {
    return this.http.post<Joke>(this.jokesUrl, joke, this.httpOptions).pipe(
      tap(
        (newJoke: Joke) => console.log(`added joke w/ id=${newJoke.id}`)),
        catchError(this.handleError<Joke>('addJoke'))
    );
  }

  /** PUT: update a joke to the server */
  updateJoke(joke: Joke): Observable<Joke> {    
    return this.http.put<Joke>(this.jokesUrl, joke, this.httpOptions).pipe(
        catchError(this.handleError<Joke>('updateJoke'))
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
