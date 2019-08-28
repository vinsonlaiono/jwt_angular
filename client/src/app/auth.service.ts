import { Injectable } from '@angular/core';
import { config } from './config/config'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { Tokens } from './config/tokens';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;

  constructor(private _http: HttpClient) { }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this._http.post<any>(`${config.apiUrl}/login`, user)
      .pipe(
        tap(tokens => {
          console.log("Tokens from tap: ", tokens);
          this.doLoginUser(user.username, tokens);
        }),
        mapTo(true),
        catchError(error => {
          console.log("Error from catch error: ",error.error);
          return of(false);
        }));
  }

  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }
  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    console.log("Refresh Token: ", localStorage.getItem(this.REFRESH_TOKEN))
    console.log("JWT Token: ", localStorage.getItem(this.JWT_TOKEN));
  }
}
