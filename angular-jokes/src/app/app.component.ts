import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: HttpClient){

  }
  title = 'angular-jokes';
  

  ngOnInit(): void {
  }
  
}


