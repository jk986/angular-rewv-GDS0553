import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guardias/auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent, title:"Login"},
  {path:'register', component:RegisterComponent, title:"Register"},
  {path:'home', component:HomeComponent, title:"Home"},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
