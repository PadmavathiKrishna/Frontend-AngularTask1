import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { FormsModule  } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input';
import { SignupComponent } from './signup/SignupComponent';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import { _MatCheckboxRequiredValidatorModule } from '@angular/material/checkbox';
import { ChangepasswordComponent } from './changepassword/changepassword.component';




// Add icons to the library (you can add more as needed)
library.add(faEye, faEyeSlash);


@NgModule({
  declarations: [
    LoginComponent,
   
    HomeComponent,
    SignupComponent,
    ForgetpasswordComponent,
    
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule, MatButtonModule, MatIconModule,
    FontAwesomeModule,
  ]
})
export class AuthModule { }
