import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { MineComponent } from './mine/mine.component';
import { BrowseComponent } from './browse/browse.component';
import { TranctionComponent } from './tranction/tranction.component';

const routes: Routes = [
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent },
  { path: 'mine', component: MineComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'tranction/:id', component: TranctionComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
