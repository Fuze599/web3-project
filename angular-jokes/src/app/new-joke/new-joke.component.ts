import { Component, OnInit} from '@angular/core';
import * as e from 'express';

import { Joke } from '../interface/joke';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css']
})
export class NewJokeComponent implements OnInit {

  categories : string[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJokesCategory();
  }

  getJokesCategory(): void {
    this.jokeService.getJokes()
    .subscribe(joke => joke.forEach(e => this.categories.push(e.category)));      
  }

  add(content: string, category: string): void {
    if (!content.trim()) {       
      return; }
    this.jokeService.addJoke({ content: content, category: category, like: 0, date: new Date(Date.now()).toDateString() } as Joke)
      .subscribe();
  }

  onSubmit(): void {

  }

}
