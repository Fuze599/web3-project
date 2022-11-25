import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Joke } from '../joke';
import { JokeService } from '../joke.service';

import { LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.css']
})
export class JokeDetailComponent implements OnInit{

  joke: Joke | undefined;

  liked: boolean= false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private jokeService: JokeService,
    private location: Location,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  ngOnInit(): void {
    const isConnected = localStorage.getItem("isConnected");
    
    if (isConnected === null) {
      this.router.navigate(["/login"]);
      return;
    }

    this.getJoke();
  }


  getJoke(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.jokeService.getJoke(id).subscribe(joke => this.joke = joke);
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
