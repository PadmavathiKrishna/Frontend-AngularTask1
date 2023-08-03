import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { FinalComponent } from './final/final.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { EndpageComponent } from './endpage/endpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [
   
    FinalComponent,
    EndpageComponent,
    RegisterpageComponent
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatCheckboxModule,
    MatIconModule,FormsModule,
    HttpClientModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
