import {Component, OnInit} from '@angular/core';
import {Board} from './classes/Board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private boardSize = 50;
  public board = new Board(this.boardSize);

  ngOnInit(): void {

  }
}
