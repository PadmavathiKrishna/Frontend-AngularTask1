import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {
  private mockURl = 'assets/firstexample-mock.json';

  constructor(private http : HttpClient) { }

  getdata(){
    return this.http.get(this.mockURl);
  }
}
