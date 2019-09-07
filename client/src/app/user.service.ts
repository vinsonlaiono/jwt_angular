import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getDefaultService } from 'selenium-webdriver/opera';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http : HttpClient) { }
  
  getUser(){
    return this._http.get('/api/user/:email')
  }
}