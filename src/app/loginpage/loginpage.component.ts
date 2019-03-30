import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username: string = "";
  password: string = "";
  success;
  text;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
  }


  async login() {
    const isValid: Boolean = await this.authService.login(this.username, this.password)

    if (isValid) {
      this.text = "Login Successful";
      this.router.navigate(['dashboard'])
    }
    else {
      this.success = false;

      this.text = "Invalid Credentials"

    }
  }
}
    // if (this.username === "admin" && this.password === "admin@123") {
    //   this.success = true;
    //   this.text = "Login Successful";
    //   this.router.navigate(["dashboard"])

    // }
    // else {

    //   this.success = false;
    //   this.text = "Invalid Credentials";






  // console.log(this.username, "", this.password);







