import { Edge } from './Edge';
import { Node } from './Node';
import { chunk, isEmpty } from 'lodash-es';

export class Board {
  private board: Node[];
  public edges: Edge[];

  constructor(
    public boardSize: number
  ) {
    const boardArea = boardSize * boardSize;
    this.board = this.getInitialBoardNodes(boardArea);
    this.edges = this.generateAvailableEdges(this.board);

    this.removeUnconnectedNodes();
  }

  private getInitialBoardNodes(boardArea: number): Node[] {
    const board = [];
    for (let i = 0; i < boardArea; i++) {
      board.push(new Node(i));
    }
    return board;
  }

  private generateAvailableEdges(nodes: Node[]): Edge[] {
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

  private removeUnconnectedNodes(): void {
    this.board.forEach((node) => {
      if (isEmpty(node.edges)) {
        node.turnToWall()
      }
    })
  }

  public getBoardIn1D(): Node[] {
    return this.board;
  }

  public getBoardIn2D(): Node[][] {
    return chunk(this.board, this.boardSize);
  }
}
