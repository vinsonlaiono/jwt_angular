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
  public loginErrors : String =  null;
  public loginSuccess : String =  null;

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
      this.resetAlerts();
      data === true ? this.loginSuccess = "Successfully logged in user..." : this.loginErrors =  "Failed to log in..."
      
    });
  }
  resetAlerts(){
    this.loginErrors = null;
    this.loginSuccess = null;
  }
}
