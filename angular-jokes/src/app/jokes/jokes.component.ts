import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit{

  jokes: Joke[] = [];
  filteredJokes: Joke[] = [];
  categories: string[] = [];

  constructor(
    private jokeService: JokeService,
    private router: Router) { }

  ngOnInit(): void {

    const isConnected = localStorage.getItem("isConnected");

    if (isConnected === null) {
      this.router.navigate(["/login"]);
      return;
    }

    this.getJokes();
    this.getJokesCategory();
    this.resetFilteredJokes();
  }

  getJokes(): void {
    this.jokeService.getJokes()
      .subscribe(jokes => {
        this.jokes = jokes;
        this.filteredJokes = jokes;
      });
  }

  getJokesCategory(): void {
    // this.jokeService.getJokesCategory()
      // .subscribe(cat => this.categories = cat);
    this.categories = this.jokeService.getJokesCategory();
  }

  resetFilteredJokes(): void {
    this.filteredJokes = this.jokes;
  }

  filter(cat:string): void {
    this.filteredJokes = this.jokes.filter(j => j.category === cat);
  }
}
