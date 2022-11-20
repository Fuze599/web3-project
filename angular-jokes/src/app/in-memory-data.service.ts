import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const jokes = [
      { id: 1, content: 'joke1 farce', category: 'farce', like: 9, date: 'date1' },
      { id: 2, content: 'joke2 farce', category: 'farce', like: 50, date: 'date2' },
      { id: 3, content: 'joke3 info', category: 'informatique', like: 8, date: 'Tue Nov 15 2022' },
      { id: 4, content: 'joke4 anecdote', category: 'anecdote', like: 0, date: 'Tue Nov 18 2022' },
      { id: 5, content: 'etsyrudtfiyxutj', category: 'anecdote', like: 0, date: 'Fri Nov 18 2022' }
    ];


    const categories = [ "farce", "informatique", "blagues de toto", "anecdote", "chuck Norris facts", "autres"];

    return {jokes, categories};
  }


  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(jokes: Joke[]): number {
    return jokes.length > 0 ? Math.max(...jokes.map(joke => joke.id)) + 1 : 11;
  }
}
