import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokesComponent implements OnInit{

  jokes: Joke[] = [];
  filteredJokes: Joke[] = [];
  categories: string[] = [];

  constructor(private jokeService: JokeService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getJokesCategory();
    this.getJokes();
  }

  getJokes(): void {
    this.jokeService.getJokes()
      .subscribe(jokes => this.jokes = jokes);
  }

  getJokesCategory(): void {
    this.jokeService.getJokesCategory()
      .subscribe(cat => this.categories = cat);      
  }

  resetFilteredJokes(): void {
    this.filteredJokes = this.jokes;
  }

  filter(cat:string): void {
    this.filteredJokes = this.jokes.filter(j => j.category === cat);
    this.cdr.detectChanges()
  }
}
