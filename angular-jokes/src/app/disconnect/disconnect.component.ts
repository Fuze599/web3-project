import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.component.html',
  styleUrls: ['./disconnect.component.css']
})
export class DisconnectComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("isConnected") === null) {
      this.router.navigate(["/login"]);
      return;
    }

    localStorage.removeItem("isConnected");
    window.location.reload();
    this.router.navigate(["/home"]);
  }

}
