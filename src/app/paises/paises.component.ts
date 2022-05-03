import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises : any;
  sendPaises : any;

  constructor(private paisesService : PaisesService) { }

  ngOnInit(): void {
    this.getpaises();
    this.getsendPaises();
  }
  
  getpaises(){
    this.paisesService.getpaises().subscribe(resp =>{
      console.log(resp);
      this.paises = resp.url;
      if(this.paises.includes('mp4')){
        this.getpaises();
       }
     })
  }

  getsendPaises(){
    this.paisesService.getsendPaises().subscribe(resp =>{
      console.log(resp);
      this.sendPaises = resp;
     })
  }

}
