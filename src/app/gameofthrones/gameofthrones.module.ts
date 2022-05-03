import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameofthronesRoutingModule } from './gameofthrones-routing.module';
import { GameofthronesComponent } from './gameofthrones.component';


@NgModule({
  declarations: [
    GameofthronesComponent
  ],
  imports: [
    CommonModule,
    GameofthronesRoutingModule
  ]
})
export class GameofthronesModule { }
