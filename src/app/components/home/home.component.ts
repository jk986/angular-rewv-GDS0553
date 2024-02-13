import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ///
  ///
  constructor(
    private _router:Router
  ){}
  ///
  logOut(){
    sessionStorage.removeItem('email');
    this._router.navigate(['login']);
  }
}
