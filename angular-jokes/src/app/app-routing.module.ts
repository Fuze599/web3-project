import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { NewJokeComponent } from './new-joke/new-joke.component';
import { AboutComponent } from './about/about.component';
import { JokeDetailComponent } from './joke-detail/joke-detail.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'jokes', component: JokesComponent },
  { path: 'jokes/:id', component: JokeDetailComponent },
  { path: 'create', component: NewJokeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
