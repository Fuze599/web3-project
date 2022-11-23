import { Component, OnInit} from '@angular/core';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-new-joke',
  templateUrl: './new-joke.component.html',
  styleUrls: ['./new-joke.component.css']
})
export class NewJokeComponent implements OnInit {

  jokes: string[] = [];

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    this.getJokesCategory();
  }

  getJokesCategory(): void {
    this.jokeService.getJokesCategory()
      .subscribe(cat => {console.log(cat);
        this.jokes = cat} );      
  }

  add(content: string, category: string): void {
    if (!content.trim()) {       
      return; }
    this.jokeService.addJoke({ content: content, category: category, like: 0, date: new Date(Date.now()).toISOString() } as Joke)
      .subscribe();
  }

  submitted = false;

  onSubmit() { this.submitted = true; console.log("passé");}

  jokeTextEntered: string = "";

}
