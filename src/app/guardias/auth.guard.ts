import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('email')){
    return true;
  }else{
    return false;
  }
};
