import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  constructor( private authService : AuthService, private _router:Router) { }

  ngOnInit() {
  }

  logoutUser(){
    console.log("Logging out...")
    this.authService.logOutUser().subscribe( success => {
      if (success) {
        console.log("Successfully logged out user...")
        this._router.navigate(['/']);
      }
    })
  }

}
