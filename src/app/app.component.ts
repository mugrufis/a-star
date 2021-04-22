import {Component, OnInit} from '@angular/core';
import {Node} from './classes/Node';
import {Edge} from './classes/Edge';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public static readonly PROBABILITY_TO_BE_WALL = 0.3;
  private boardSize = 5;
  private board: Node[] = [];
  private edges: Edge[] = [];

  ngOnInit(): void {

    const boardArea = this.boardSize * this.boardSize;
    this.board = this.getInitialBoardNodes(boardArea);

    this.edges = this.generateAvailableEdges(this.board);
  }

  private getInitialBoardNodes(boardArea: number): Node[] {
    const board = [];
    for (let i = 0; i < boardArea; i++) {
      board.push(new Node(i));
    }
    return board;
  }

  private generateAvailableEdges(nodes: Node[]): Edge[] {
   // todo
    return [];
  }

}
