import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css']
})
export class NewJokeComponent implements OnInit {

  jokes: string[] = [];

  constructor(
    private jokeService: JokeService,
    private router: Router) { }

  ngOnInit(): void {
    const isConnected = localStorage.getItem("isConnected");
    
    if (isConnected === null) {
      this.router.navigate(["/login"]);
      return;
    }

    this.getJokesCategory();
  }

  getJokesCategory(): void {
    this.jokeService.getJokesCategory()
      .subscribe(cat => this.jokes = cat );      
  }

  add(content: string, category: string): void {
    if (!content.trim()) {       
      return; }
    this.jokeService.addJoke({ content: content, category: category, like: 0, date: new Date(Date.now()).toISOString() } as Joke)
      .subscribe();
    alert("new joke added");
  }

  jokeTextEntered: string = "";

}
