import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { User } from '../user';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    const isConnected = localStorage.getItem("isConnected");

    if (isConnected !== null) {
      this.router.navigate(["/home"]);
    }
  }



  connect(pseudo: string, password: string): void {
    this.userService.getUser(pseudo!)
      .subscribe(user => {

        if (user.length === 0) {
          alert("Pseudo ou mot de passe incorrect !");
          return;
        }

        if (user[0].password !== password) {
          alert("Pseudo ou mot de passe incorrect !");
          return;
        }

        localStorage.setItem("isConnected", "true");

        window.location.reload();
        this.router.navigate(['/home']);

      });
  }

}
