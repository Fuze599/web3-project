import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../interface/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) {
  
  }
  
  getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>('api/jokes')
  }

  getJoke(id: number): Observable<Joke> {
    return this.http.get<Joke>('api/jokes/' + id)
  } 

  updateJoke(joke: Joke): Observable<Joke> {
    return this.http.put<Joke>('api/jokes/' + joke.id, joke)
  }

  addJoke(joke: Joke): Observable<Joke> {
    return this.http.post<Joke>('api/jokes', joke)
  }

}
