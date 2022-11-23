import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { NewJokeComponent } from './new-joke/new-joke.component';
import { AboutComponent } from './about/about.component';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokesComponent,
    NewJokeComponent,
    AboutComponent,
    JokeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
