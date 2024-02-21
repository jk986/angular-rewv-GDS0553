import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('email')){
    return true;
  }else{
    let route = inject(Router);
    route.navigate(['login']);
    return false;
  }
};
