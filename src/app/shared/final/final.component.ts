import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/form.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent {
  tablelist: any=[];

  constructor(
    private router:Router,
    private formservice:FormService)
  {};


  ngOnInit(){
    this.getdata()
  }

  
  getdata(){
debugger
    this.formservice.getdata().subscribe((result : any) => {
      console.log(result)
      this.tablelist = result.data.tablelist
    })


  }

onClick(){
  this.router.navigate(['/shared/endpage']);

}


}

