import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
///
  registerForma = this.fb.group({
    fullName:['',[Validators.required]],
    email:['',[Validators.email,Validators.required]],
    pass:['',[Validators.required]],
    confirmPass:['',[Validators.required]]
  });
///
  constructor(private fb:FormBuilder){}
///

  get email(){
    return this.registerForma.controls['fullName'];
  }
  get fullName(){
    return this.registerForma.controls['email'];
  }get pass(){
    return this.registerForma.controls['pass'];
  }
  get confirmPass(){
    return this.registerForma.controls['confirmPass'];
  }
}
