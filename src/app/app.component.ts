import { Component, OnInit } from '@angular/core';
import { Board } from './classes/Board';
import { AStar } from './classes/AStar';
import {BoardNode} from './classes/BoardNode';

export type SearchEndpointIds = {startNode: number, endNodes: number[]};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private boardSize = 20;
  private probabilityToBeWall = 0.3;

  private searchEndpointIds: SearchEndpointIds = {
    startNode: 0,
    endNodes: [Math.floor(Math.random() * (this.boardSize * this.boardSize))  ]
  };

  public board = new Board(this.boardSize, this.searchEndpointIds, this.probabilityToBeWall);

  ngOnInit(): void {
    const goalBoardNode = AStar.run(this.board);

    let node = goalBoardNode;
    while (node?.getClosestNodeToGetHere()) {
      node =node as BoardNode;
      node.isPartOfWinningPath = true;
      node = node.getClosestNodeToGetHere();
    }
  }
}
