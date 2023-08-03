import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {


  signupform: FormGroup |any ;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router) 
    {}

  ngOnInit(): void {
    this.createform()
  }

  createform(){
    this.signupform= this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]),
      acceptTerms: new FormControl('', [Validators.required])
  })
  }


  onSubmit(): void {
  
    this.submitted = true;
debugger
    if (this.signupform.valid) {
      alert('Form submitted successfully!');
      console.log('Form submitted successfully!');
      console.log('email', this.signupform.value.email);
      this.router.navigate(['/shared/form']);
      
      
    } else {
      alert("Email is Invalid");
      console.log('email:', this.signupform.value.email);
      
    }
  }


}



