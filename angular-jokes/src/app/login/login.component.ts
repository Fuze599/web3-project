import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  constructor(private http: HttpClient, private loginService: LoginService){

  }
  
  ngOnInit(): void {
    
  }

  loginUser(): void{
     this.loginService.getlogin().subscribe(res => console.log(res))
  }


}
