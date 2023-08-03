import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { SignupComponent } from './signup/SignupComponent';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
 
    {path:'', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component:ForgetpasswordComponent},
  
  {path:'changepassword', component:ChangepasswordComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
