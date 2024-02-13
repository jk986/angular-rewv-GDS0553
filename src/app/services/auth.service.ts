import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ///
  private url:string = "http://localhost:3000";
  
  ///
  constructor(private _http:HttpClient) { 
  }
  
  ///
  registerUser(usuario:User){
    return this._http.post(`${this.url}/users`,usuario);
  }

  getUser(email:string){
    return this._http.get(`${this.url}/users?email=${email}`);
  }
}
