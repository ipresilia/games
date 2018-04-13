import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AllGamesComponent } from './all-games/all-games.component';
import { GameCardComponent } from './game-card/game-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AllGamesComponent,
    GameCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
