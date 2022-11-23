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
               
        console.log(user);
        
        console.log(password);
        
        
        if (user.toString().length === 0) {
          alert("Incorrect pseudo or passsword !");
          return;
        }

        console.log("z",user.password,"z",password,"z");
        
        console.log(user.password === password);
        // TODO VERIFICATION DE MDP
        

        localStorage.setItem("isConnected", "true");
    
        window.location.reload();
        this.router.navigate(['/home']);
        console.log(user);
        
      });
  }

}
