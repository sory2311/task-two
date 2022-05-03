import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameofthronesComponent } from './gameofthrones.component';

const routes: Routes = [{ path: '', component: GameofthronesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameofthronesRoutingModule { }
