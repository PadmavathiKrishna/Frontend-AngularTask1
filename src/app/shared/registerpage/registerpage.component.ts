import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {
  profileform: FormGroup | any;



  constructor(private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createform();

  }
  createform() {
    this.profileform = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{3}-[0-9]{2}-[0-9]{3}")]],
      dob: ['', [Validators.required]],
      fullName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      religion: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      country: ['', [Validators.required]]
    });
  }








  onSubmit() {
    if (this.profileform.valid) {
      alert("Form Submitted Successfully!!");
      this.router.navigate(['/shared/final']);
    }
else{
  alert("Fill the Required Details");
}

  }
}
