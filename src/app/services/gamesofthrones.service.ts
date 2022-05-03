import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesofthronesService {
  urlgameofthrones = 'https://thronesapi.com/';

  
  constructor(private http:HttpClient) { }

  getgameofthrones(): Observable<any>{
    return this.http.get(this.urlgameofthrones)
  }

  getsendGames(): Observable<any>{
    return this.http.get(`${this.urlgameofthrones}api/v2/Characters`)
  }

}
