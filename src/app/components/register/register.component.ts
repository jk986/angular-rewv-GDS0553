import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../shared/password-match.directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  ///
  registerForma = this.fb.group({
    fullName: ['', [Validators.required,Validators.pattern]],
    email: ['', [Validators.email, Validators.required]],
    pass: ['', [Validators.required]],
    confirmPass: ['', [Validators.required]]
  },{
    validators:passwordMatchValidator
  });
  ///
  constructor(
    private fb: FormBuilder,
    private _authS: AuthService,
    private _messageS: MessageService,
    private _router: Router
  ) { }
  ///

  get email() {
    return this.registerForma.controls['fullName'];
  }
  get fullName() {
    return this.registerForma.controls['email'];
  } get pass() {
    return this.registerForma.controls['pass'];
  }
  get confirmPass() {
    return this.registerForma.controls['confirmPass'];
  }

  sendUser() {
    console.log("Esto enviando datos");
    //Guarda los datos
    const datos = { ...this.registerForma.value };
    delete datos.confirmPass;
    this._authS.registerUser(datos as User).subscribe(
      res => {
        this._messageS.add({ severity: 'success', summary: 'Success', detail: 'Registro Exitoso' });
        setTimeout(() => {
          this._router.navigate(['login']);
        }, 1000);

      },
      error => {
        this._messageS.add({ severity: 'error', summary: 'Error', detail: 'Registro Fallido' });
      });
  }
}
