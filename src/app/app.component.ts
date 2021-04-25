import {Component, OnInit} from '@angular/core';
import {Board} from './classes/Board';

export type SearchEndpointIds = {startNode: number, endNodes: number[]};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private boardSize = 50;

  private searchEndpointIds: SearchEndpointIds = {
    startNode: 0,
    endNodes: [290, 1427]
  };

  public board = new Board(this.boardSize, this.searchEndpointIds);

  ngOnInit(): void {

  }
}


