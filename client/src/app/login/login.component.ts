import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm : any;
  public loginErrors : String =  null;
  public loginSuccess : String =  null;
  public loggedInStatus : Boolean = false;
  public user : Object = null;

  constructor(
    private authServ : AuthService,
    private userServ : UserService,
    private _router : Router
    ) { }

  ngOnInit() {
    this.loginForm ={
      'email': 'vaiono@gmail.com',
      'password' : '1234567890'
    }
    
    this.loggedInStatus = this.checkLogin();
  }
  login(){
    console.log("The form: ",this.loginForm)
    this.authServ.login(this.loginForm).subscribe( data => {
      console.log(data);
      this.resetAlerts();
      data === true ? this.loginSuccess = "Successfully logged in user..." : this.loginErrors =  "Failed to log in..."
      this.loggedInStatus = this.checkLogin();
      console.log("Logged in status: ", this.loggedInStatus);
      localStorage.setItem("user" , this.loginForm.email)
      if(data) this._router.navigate(['/home', 'profile'])
    });
  }

  // getUserInfo(){
  //   this.userServ.getUser().subscribe( (data) => {

  //   })
  // }

  logoutUser(){
    console.log("Logging out...")
    this.authServ.logOutUser().subscribe( success => {
      if (success) {
        console.log("Successfully logged out user...")
        this.loggedInStatus = this.checkLogin();
        this._router.navigate(['/']);
      }
    })
  }
  resetAlerts(){
    this.loginErrors = null;
    this.loginSuccess = null;
  }

  checkLogin(){
    return this.authServ.isLoggedIn()
  }
}
