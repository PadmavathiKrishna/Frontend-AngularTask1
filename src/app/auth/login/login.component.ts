import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginform: FormGroup | any ;
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
    this.loginform = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')])
  })
}
  

  onSubmit() {
    
    this.submitted = true;
 debugger
    if (this.loginform.valid) {

      alert('Form submitted successfully!');
      
      console.log('email:', this.loginform.value.email);
      console.log('password:', this.loginform.value.password);
      this.router.navigate(['/shared/form']);

    }

    else {

      console.log('email:', this.loginform.value.email);
      console.log('password:', this.loginform.value.password);
      alert("Email is Invalid");
      
    }

  }
}

