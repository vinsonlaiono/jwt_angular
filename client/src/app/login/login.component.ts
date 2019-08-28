import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : any;

  constructor(private authServ : AuthService) { }

  ngOnInit() {
    this.loginForm ={
      'email': 'vaiono@gmail.com',
      'password' : '1234567890'
    }
  }
  login(){
    console.log(this.loginForm)
    this.authServ.login(this.loginForm).subscribe( data => {
      console.log(data);
      let results = data === true ? "Successfully logged in user..." : "Failed to log in..."
      console.log(results)
    });
  }
}
