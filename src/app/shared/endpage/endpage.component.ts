import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent {



  
  constructor(
  
    private router: Router) 
    {}



    onSubmit(){

      this.router.navigate(['/auth/home']);

    }



}




