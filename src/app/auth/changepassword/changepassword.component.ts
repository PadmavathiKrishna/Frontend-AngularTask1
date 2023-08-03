import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit{
  changeform: FormGroup | any;
  hide = true;
 
  showNewPassword = true;

  hide1 =true;

  constructor( private fb: FormBuilder,
    private router:Router){}


    ngOnInit(): void {
      this.createform()
      
    }
    toggleNewPasswordVisibility() {
      this.showNewPassword = !this.showNewPassword;
    }
  
    
    
    createform(){
      this.changeform = this.fb.group({
        oldPassword: new FormControl('',[Validators.required]),
        newPassword: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}')]),
        confirmPassword: new FormControl('', [Validators.required])
      }, {
        validator: this.mustMatch('newPassword', 'confirmPassword')
      });
    }
  
    mustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
  
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
   
    
    onClick() {
     
      console.log(this.changeform.value);
 
    if (this.changeform.valid) {

      alert('Your New Password created successfully!');
      
      
     
       console.log('password:', this.changeform.value.confirmpasswordpassword);
      
      this.router.navigate(['/auth/login']);
    }

    else {

     
       console.log('password:', this.changeform.value.confirmpasswordpassword);

      alert("Email is Invalid");

      
      }

}


    }