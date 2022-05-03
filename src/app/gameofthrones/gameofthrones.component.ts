import { Component, OnInit } from '@angular/core';
import { GamesofthronesService } from '../services/gamesofthrones.service';

@Component({
  selector: 'app-gameofthrones',
  templateUrl: './gameofthrones.component.html',
  styleUrls: ['./gameofthrones.component.css']
})
export class GameofthronesComponent implements OnInit {
  gameofthrones : any;
  sendGames: any;

  constructor(private gameofthronesService : GamesofthronesService) { }

  ngOnInit(): void {
    this.getgameofthrones();
    this.getsendgames();
  }

  getgameofthrones(){
    this.gameofthronesService.getgameofthrones().subscribe(resp =>{
      console.log(resp);
      this.gameofthrones = resp.url;
      if(this.gameofthrones.includes('mp4')){
        this.getgameofthrones();
       }
     })
   }

   getsendgames(){
    this.gameofthronesService.getsendGames().subscribe(resp =>{
      console.log(resp);
      this.sendGames = resp;
     })
   }
   
}
