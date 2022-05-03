import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  urlPaises = 'https://restcountries.com/';


  constructor(private http:HttpClient) { }
  
  getpaises(): Observable<any>{
    return this.http.get(this.urlPaises)
  }

  getsendPaises(): Observable<any>{
    return this.http.get(`${this.urlPaises}/v2/lang/es`)
  }


}
