import { Component, OnInit } from '@angular/core';
import { games } from './../data/games';

@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.css']
})
export class AllGamesComponent implements OnInit {

  games: Array<any> = games;

  constructor() { }

  ngOnInit() {
  }

}
