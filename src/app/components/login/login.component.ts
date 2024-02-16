import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // capturar datos desde html
import { AuthService } from '../../services/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ///
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pass:['',[Validators.required]]
  });
  ///
  constructor(
    private fb:FormBuilder,
    private _authService:AuthService,
    private _router:Router,
    private _messageS:MessageService
  ){

  }
  ///

  get email(){
    return this.loginForm.controls['email'];
  }

  get pass(){
    return this.loginForm.controls['pass'];
  }

  login(){
    const {email,pass} = this.loginForm.value;
    this._authService.getUser(email!).subscribe(
      res=>{
        let data:any;
        data=res;
        if(data.length>0 && data[0].pass===pass){
          sessionStorage.setItem('email',email as string);
          this._router.navigate(['home']);
          console.log(data);
          this._messageS.add({ severity: 'success', summary: 'Success', detail: 'Datos Correctos' });
        }else{
          this._messageS.add({ severity: 'error', summary: 'Error', detail: 'Datos incorrectos' });
          setTimeout(() => {
            this._router.navigate(['login']);
          }, 1000);

        }
      },
      error=>{
        console.warn('Hubo un error');
      }

    );

  }
}
