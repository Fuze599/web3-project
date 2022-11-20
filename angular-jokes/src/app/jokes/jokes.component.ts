import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit{

  jokes: Joke[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJokes();
  }

  getJokes(): void {
    this.jokeService.getJokes()
      .subscribe(jokes => this.jokes = jokes);
  }

}
