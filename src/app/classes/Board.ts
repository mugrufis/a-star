import { Edge } from './Edge';
import { chunk, isEmpty } from 'lodash-es';
import {BoardNode} from './BoardNode';
import {SearchEndpointIds} from '../app.component';

export class Board {
  private board: BoardNode[];
  public edges: Edge[];

  constructor(
    public boardSize: number,
    private endpointIds: SearchEndpointIds
  ) {
    const boardArea = boardSize * boardSize;
    this.board = this.getInitialBoardNodes(boardArea, endpointIds);
    this.edges = this.generateAvailableEdges(this.board);

  }

  private getInitialBoardNodes(boardArea: number, endpointIds: SearchEndpointIds): BoardNode[] {
    const board = [];
    for (let i = 0; i < boardArea; i++) {
      const boardNode = new BoardNode(i);

      if (i === endpointIds.startNode){
        boardNode.isStartNode = true;
      }

      if (endpointIds.endNodes.indexOf(i) > -1){
        boardNode.isGoalNode = true;
      }

      board.push(boardNode);
    }
    return board;
  }

  private generateAvailableEdges(nodes: BoardNode[]): Edge[] {
    const edges: Edge[] = [];
    const board2D = this.getBoardIn2D();
    for (let i = 0; i < this.boardSize; i++) {
      // push horizontal edge
      const row = board2D[i];
      row.forEach((node, index, iteratedRow) => {
        if (!node.isWall && iteratedRow[index + 1] && !iteratedRow[index + 1].isWall) {
          const oneEnd = node;
          const otherEnd = iteratedRow[index + 1];
          const newEdge = new Edge([oneEnd, otherEnd]);
          edges.push(newEdge);
          oneEnd.addEdge(newEdge);
          otherEnd.addEdge(newEdge);
        }
      });

      // push vertical edge
      if (!row[i].isWall && board2D[i + 1] && !board2D[i + 1][i].isWall) {
        edges.push(new Edge([row[i], board2D[i + 1][i]]));
      }
    }
    return edges;
  }

  public getBoardIn1D(): BoardNode[] {
    return this.board;
  }

  public getBoardIn2D(): BoardNode[][] {
    return chunk(this.board, this.boardSize);
  }
}
