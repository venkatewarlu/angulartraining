import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  backgroundColor;
  constructor(private router: Router) { }

  ngOnInit() {
  }




  dashboard() {
    this.router.navigate(['dashboard'])
  }
  users() {
    this.router.navigate(['users'])
  }
  products() {
    this.router.navigate(['products'])

  }
  logistics() {
    this.router.navigate(['logistics']);
  }
  signout() {
    this.router.navigate(['']);
  }

}
