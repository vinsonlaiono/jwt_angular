import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecretGaurdService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.canLoad();
  }
  canLoad() {
    if (!this.authService.isLoggedIn()) {
      // if user is not logged in
      this.router.navigate(['/']);
    }
    return this.authService.isLoggedIn();
  }
}
