import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit{
  forgetform: FormGroup |any ;
  submitted=false;
  
  
  constructor(private router:Router,
    private formBuilder:FormBuilder){}


  ngOnInit(): void {
    this.createform();
  }
  
  createform(){
      this.forgetform = this.formBuilder.group({
        email : new FormControl("", [Validators.required,Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')])
      })
  }





onSubmit() {

    this.submitted =true;

    if(this.forgetform.valid){
      alert('Create a New Password!');
      this.router.navigate(['/auth/resetpassword']);

    }
     else{
      alert("Email is Invalid");
     }

}
}
