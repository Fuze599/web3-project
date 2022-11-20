import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit{

  joke: Joke | undefined;

  liked: boolean= false;

  constructor(
    private route: ActivatedRoute,
    private jokeService: JokeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.jokeService.getJoke(id)
      .subscribe(joke => this.joke = joke);
  }

  increaseLike(): void {
    this.joke!.like+=1;
    this.jokeService.updateJoke(this.joke!)
      .subscribe();
      //.subscribe(() => this.goBack());
    this.liked = true;
  } 

  goBack(): void {
    this.location.back();
  }

}
